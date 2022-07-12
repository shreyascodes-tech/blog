import { blue, bold, red, green } from "fmt/colors.ts";
import { loadBlogs } from "./blog.ts";

const commit = Deno.args[0];
const filesToPush = Deno.args.slice(1);
if (!commit || !filesToPush) {
  console.log(red(bold("❌ Invalid commit message")));
  Deno.exit(1);
}
console.log(green("📝 Building ") + blue("blogs.g.json"));
const blogs = loadBlogs();
Deno.writeTextFileSync("blogs.g.json", JSON.stringify(blogs, null, 4));
console.log(green("✅ Built ") + blue("blogs.g.json"));
console.log(blue("Deploying to production"));
console.log(
  await Deno.run({
    stdout: "piped",
    cmd: ["git", "add", ...filesToPush],
  }).output()
);
console.log(
  await Deno.run({
    stdout: "piped",
    cmd: ["git", "commit", "-m", commit],
  }).output()
);
console.log(
  await Deno.run({
    stdout: "piped",
    cmd: ["git", "push"],
  }).output()
);
