import { blue, bold, red, green } from "fmt/colors.ts";
import { loadBlogs, loadAssets } from "./blog.tsx";

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

console.log(green("📝 Building ") + blue("assets.g.json"));
const assets = loadAssets();
Deno.writeTextFileSync("assets.g.json", JSON.stringify(assets, null, 4));
console.log(green("✅ Built ") + blue("assets.g.json"));
console.log(blue("Deploying to production"));

const decoder = new TextDecoder("utf-8");

console.log(
  decoder.decode(
    await Deno.run({
      stdout: "piped",
      cmd: ["git", "add", ...filesToPush],
    }).output()
  )
);
console.log(
  decoder.decode(
    await Deno.run({
      stdout: "piped",
      cmd: ["git", "commit", "-m", commit],
    }).output()
  )
);
console.log(
  decoder.decode(
    await Deno.run({
      stdout: "piped",
      cmd: ["git", "push"],
    }).output()
  )
);
