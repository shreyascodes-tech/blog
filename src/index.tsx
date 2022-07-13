// deno-lint-ignore-file no-explicit-any
/** @jsx h  */
import { h, FunctionalComponent as FC, Fragment } from "htm";
import Header from "./components/header.tsx";

const Index: FC<{
  blogs: {
    slug: string;
    attributes: any;
  }[];
}> = ({ blogs }) => {
  return (
    <Fragment>
      <Header />
      <main class="home">
        <h1>All Blogs</h1>
        <ul>
          {blogs.map(({ attributes, slug }) => (
            <li>
              <a href={`/${slug}`}>
                {attributes["thumbnail"] && (
                  <img
                    src={attributes["thumbnail"]}
                    alt={attributes["title"]}
                  />
                )}
                {attributes["title"]}
              </a>
            </li>
          ))}
        </ul>
      </main>
      <script
        async
        defer
        data-website-id="9b902b25-adb6-4607-a9ad-4fb1e1c96a9b"
        src="https://umami.shreyascodes.tech/umami.js"
      ></script>
    </Fragment>
  );
};

export default Index;
