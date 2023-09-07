import { Hono } from "https://deno.land/x/hono@v3.6.0-rc.1/mod.ts";
import { pages } from "./src/router.tsx";
import { serveStatic } from "https://deno.land/x/hono@v3.6.0-rc.1/middleware.ts";
import { dev } from "./src/utils/dev.tsx";

const hono = new Hono();
dev(hono);

hono.route("/", pages);

hono.use(
  "*",
  serveStatic({
    root: "./public",
  })
);

Deno.serve(hono.fetch);
