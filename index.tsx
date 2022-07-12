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
      <main>
        <h1
          style={{
            color: "#c9d1d9",
          }}
        >
          All Blogs
        </h1>
        <ul
          style={{
            margin: 0,
            marginLeft: "1rem",
            padding: 0,
          }}
        >
          {blogs.map(({ attributes, slug }) => (
            <li>
              <a
                style={{
                  fontSize: "1.25rem",
                  color: "#58a6ff",
                  textDecoration: "none",
                }}
                href={`/${slug}`}
              >
                {attributes["title"]}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </Fragment>
  );
};

export default Index;
