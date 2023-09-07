/** @jsx jsx */
import { jsx } from "https://deno.land/x/hono@v3.6.0-rc.1/middleware.ts";
import { MainLayout } from "../layouts/main_layout.tsx";

const posts = [
  {
    title: "Hello World!",
    slug: "hello-world",
    date: "2021-01-01",
    img: "https://source.unsplash.com/random/800x600",
  },
  {
    title: "Hello World!",
    slug: "hello-world",
    date: "2021-01-01",
    img: "https://source.unsplash.com/random/800x600",
  },
  {
    title: "Hello World!",
    slug: "hello-world",
    date: "2021-01-01",
    img: "https://source.unsplash.com/random/800x600",
  },
  {
    title: "Hello World!",
    slug: "hello-world",
    date: "2021-01-01",
    img: "https://source.unsplash.com/random/800x600",
  },
];

export function HomePage() {
  return (
    <MainLayout title="Blog">
      <h1 class="text-4xl">Latest Articles</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
        {posts.map((post) => (
          <div class="bg-slate-900/50 backdrop-blur rounded shadow">
            <a href={`/posts/${post.slug}`}>
              <img src={post.img} alt="" class="w-full rounded-t" />
              <div class="p-4">
                <h2 class="text-2xl font-bold">{post.title}</h2>
                <p class="text-gray-400">{post.date}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
