import { walkSync } from "fs";
import { resolve } from "path";
import frontMatter from "https://esm.sh/front-matter@4.0.2";
import { render as md } from "gfm";

function render(body: string) {
  return md(body, {
    allowIframes: true,
  });
}

export function loadBlogs(blogsDir = "posts") {
  // deno-lint-ignore no-explicit-any
  const blogs: { slug: string; body: string; attributes: any }[] = [];
  const entries = walkSync(resolve(Deno.cwd(), blogsDir), {
    exts: [".md"],
  });

  for (const { path, name } of entries) {
    const slug = name.replace(".md", "").replaceAll(" ", "-").toLowerCase();
    const contents = Deno.readTextFileSync(path);
    const { body, attributes } = frontMatter(contents);
    blogs.push({ slug, body: render(body), attributes });
  }

  return blogs;
}

if (import.meta.main) {
  const blogs = loadBlogs();
  Deno.writeTextFileSync("blogs.g.json", JSON.stringify(blogs, null, 4));
  Deno.exit(0);
}
