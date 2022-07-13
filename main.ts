import { handler, loadBlogs, loadAssets } from "./src/blog.tsx";

import blogs from "./blogs.g.json" assert { type: "json" };
import assets from "./assets.g.json" assert { type: "json" };

import { serve } from "http";
import { yellow, bold, underline } from "fmt/colors.ts";

const port = +(Deno.env.get("PORT") ?? "80");
const DEV = !!Deno.env.get("DEV");

serve(handler(DEV ? loadBlogs() : blogs, DEV ? loadAssets() : assets), {
  port,
  onListen: ({ port }) =>
    console.log(
      `server running on ${yellow(bold(underline("http://localhost:" + port)))}`
    ),
});
