// This helper provides the TanStack Start, React, Tailwind, path alias,
// and Nitro build setup used by the portfolio.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: "vercel",
  },
  tanstackStart: {
    // Use the local SSR error wrapper.
    server: { entry: "server" },
  },
});
