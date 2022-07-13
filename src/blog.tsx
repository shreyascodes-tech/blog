// deno-lint-ignore-file
/** @jsx h */

import { walkSync } from "fs";
import { resolve, relative } from "path";
import frontMatter from "https://esm.sh/front-matter@4.0.2";
import { render as md } from "gfm";
import { CSS } from "gfm";
import { serveFile } from "file-server";
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

ul {
  margin: 0;
  margin-left: "1rem";
  padding: 0;
}


header {
  padding: 1rem 0 .5rem 0;
  margin-bottom: 1rem;
  background: #0d131d55;
  backdrop-filter: blur(24px);
  box-shadow: 0 3px 5px #18325827;
  position: sticky;
  top: 0;
}

main, header div {
  max-width: 100ch;
  margin: 0 auto;
  padding: .5rem 1rem;
}

main.home h1, main.home a {
  color: #c9d1d9;
}

main.home h1 {
  text-align: center;
}

main.home a {
  font-size: "1.25rem";
  text-decoration: none;
}

main.home ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

main.home li {
  display: block;
  max-width: max-content;
  padding: 1rem;
  font-size: 1.125rem;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
  transition: background-color .16s ease;
}

main.home li:hover {
  background-color: #fff2;
}

main.home img {
  display: block;
  width: 100%;
  max-width: 263px;
  margin-bottom: 1rem;
  border-radius: 12px;
}

main.markdown-body {
  margin-bottom: 4rem;
}
main.markdown-body img:first-child {
  display: block;
  width: 100%;
  border-radius: 12px;
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

export function loadAssets(assetsDir = "assets") {
  // deno-lint-ignore no-explicit-any

  const assets: { route: string }[] = [];
  const entries = walkSync(resolve(Deno.cwd(), assetsDir), {
    exts: [".png", ".jpg", ".jpeg", ".svg", ".gif"],
  });

  for (const { path } of entries) {
    const route = relative(Deno.cwd(), path).replaceAll("\\", "/");

    assets.push({ route });
  }

  return assets;
}

export const handler = (
  blogs: {
    slug: string;
    body: string;
    attributes: any;
  }[],
  assets: {
    route: string;
  }[]
) => {
  const assetsRoutes: Routes = {};
  for (const { route } of assets) {
    assetsRoutes[`GET@/${route}`] = (req) => serveFile(req, "./" + route);
  }

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
    ...assetsRoutes,
    ...blogRoutes,
  });
};

if (import.meta.main) {
  const blogs = loadBlogs();
  Deno.writeTextFileSync("blogs.g.json", JSON.stringify(blogs, null, 4));
  const assets = loadAssets();
  Deno.writeTextFileSync("assets.g.json", JSON.stringify(assets, null, 4));
  Deno.exit(0);
}
