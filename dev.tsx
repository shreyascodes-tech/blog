/** @jsx h  */

import { router, Routes } from "router";
import { loadBlogs } from "./blog.ts";
import { html, h, Fragment } from "htm";
import { CSS } from "gfm";

import Header from "./components/header.tsx";
import IndexPage from "./index.tsx";

const blogs = loadBlogs();
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

export const handler = router({
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
