/** @jsx h */

import { walkSync } from "fs";
import { resolve } from "path";
import frontMatter from "https://esm.sh/front-matter@4.0.2";
import { render as md } from "gfm";
import { CSS } from "gfm";

import { router, Routes } from "router";
import { html, h, Fragment } from "htm";

import Header from "./components/header.tsx";
import IndexPage from "./index.tsx";

const styles = [
  CSS,
  `body {
  margin: 0;
  padding: 0;
  font-family: Arial;
  background: #0d1117;
}

main {
  max-width: 1536px;
  margin: 0 auto;
}`,
];

const links = [
  {
    rel: "icon",
    href: "https://shreyascodes.tech/favicon.ico",
  },
];

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

export const handler = (
  blogs: {
    slug: string;
    body: string;
    attributes: any;
  }[]
) => {
  const blogRoutes: Routes = {};
  for (const { slug, attributes, body } of blogs) {
    blogRoutes[`GET@/${slug}`] = () =>
      html({
        status: 200,
        lang: "em",
        colorScheme: "dark",
        title: attributes["title"],
        styles,
        links,
        body: (
          <Fragment>
            <Header />
            <main
              data-color-mode="dark"
              data-dark-theme="dark"
              class="markdown-body"
              dangerouslySetInnerHTML={{ __html: body }}
            ></main>
          </Fragment>
        ),
      });
  }

  return router({
    "GET@/": () =>
      html({
        status: 200,
        lang: "em",
        title: "Shreyascodes Blog",
        colorScheme: "dark",
        styles,
        links,
        body: <IndexPage blogs={blogs} />,
      }),
    ...blogRoutes,
  });
};

if (import.meta.main) {
  const blogs = loadBlogs();
  Deno.writeTextFileSync("blogs.g.json", JSON.stringify(blogs, null, 4));
  Deno.exit(0);
}
