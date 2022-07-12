import { handler as dev } from "./dev.tsx";
import { handler as prod } from "./prod.tsx";

import { serve } from "http";
import { yellow, bold, underline } from "fmt/colors.ts";

const port = +(Deno.env.get("PORT") ?? "80");
const DEV = !!Deno.env.get("DEV");

serve(DEV ? dev : prod, {
  port,
  onListen: ({ port }) =>
    console.log(
      `server running on ${yellow(bold(underline("http://localhost:" + port)))}`
    ),
});
