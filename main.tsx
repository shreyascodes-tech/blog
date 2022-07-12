import { handler, loadBlogs } from "./src/blog.tsx";
// @ts-ignore dont worry if the ile is missing
import blogs from "./blogs.g.json" assert { type: "json" };

import { serve } from "http";
import { yellow, bold, underline } from "fmt/colors.ts";

const port = +(Deno.env.get("PORT") ?? "80");
const DEV = !!Deno.env.get("DEV");

serve(handler(DEV ? loadBlogs() : blogs), {
  port,
  onListen: ({ port }) =>
    console.log(
      `server running on ${yellow(bold(underline("http://localhost:" + port)))}`
    ),
});
