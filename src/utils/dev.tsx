/** @jsx jsx */
/** @jsxFrag Fragment */
import { Hono } from "https://deno.land/x/hono@v3.6.0-rc.1/mod.ts";
import {
  jsx,
  Fragment,
} from "https://deno.land/x/hono@v3.6.0-rc.1/middleware.ts";

const $dev = Deno.env.get("DEV") === "true";

const devScript = $dev
  ? await fetch(import.meta.resolve("./dev_script.js")).then((r) => r.text())
  : "";

export function dev(hono: Hono) {
  if (!$dev) return;
  const id = crypto.randomUUID();
  hono.get("/__reload__", (c) => {
    return c.text(id);
  });

  hono.get("/dev_alive", () => {
    return new Response(devScript, {
      headers: {
        "Content-Type": "text/javascript",
      },
    });
  });
}

export function Dev() {
  if (!$dev) return <></>;
  return <script src="/dev_alive"></script>;
}
