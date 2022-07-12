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
              <a href={`/${slug}`}>{attributes["title"]}</a>
            </li>
          ))}
        </ul>
      </main>
    </Fragment>
  );
};

export default Index;
