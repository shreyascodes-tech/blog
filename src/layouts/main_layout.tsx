/** @jsx jsx */
import { jsx } from "https://deno.land/x/hono@v3.6.0-rc.1/middleware.ts";
import { Dev } from "../utils/dev.tsx";
import { HtmlEscapedString } from "https://deno.land/x/hono@v3.6.0-rc.1/utils/html.ts";

function Header() {
  return (
    <header class="bg-slate-900/50 backdrop-blur text-white shadow sticky top-0">
      <div class="container px-4 py-4">
        <a href="/">
          <strong class="text-2xl font-bold">Shreyas' Blog</strong>
        </a>
      </div>
    </header>
  );
}

export function MainLayout({
  title = "Shreyas' Blog",
  head,
  children,
}: {
  title?: string;
  head?: HtmlEscapedString | HtmlEscapedString[];
  children: HtmlEscapedString | HtmlEscapedString[];
}) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.webp" type="image/webp" />
        <link rel="stylesheet" href="/global.css" />
        <title>{title}</title>
        {head}
      </head>
      <body class="bg-slate-950 text-white font-sans">
        <Header />
        <main id="root" class="container px-4 py-4">
          {children}
        </main>
        <Dev />
      </body>
    </html>
  );
}
