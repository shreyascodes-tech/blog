/** @jsx jsx */
import { jsx } from "https://deno.land/x/hono@v3.6.0-rc.1/middleware.ts";
import { Hono } from "https://deno.land/x/hono@v3.6.0-rc.1/mod.ts";
import { HomePage } from "./pages/home.tsx";

export const pages = new Hono();

pages.get("/", (c) => c.html(<HomePage />));
