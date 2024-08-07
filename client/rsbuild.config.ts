import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginStyledComponents } from "@rsbuild/plugin-styled-components";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";

export default defineConfig({
  dev: {
    assetPrefix: true,
  },
  plugins: [
    pluginReact(),
    pluginStyledComponents({
      displayName: true,
      fileName: true,
      transpileTemplateLiterals: true,
      minify: true,
    }),
  ],
  server: {
    open: true,
    host: "localhost",
    port: 3000,
  },
  tools: {
    rspack: {
      plugins: [TanStackRouterRspack()],
    },
  },
  html: {
    tags: [
      {
        tag: "link",
        attrs: { href: "https://fonts.googleapis.com", rel: "preconnect" },
      },
      {
        tag: "link",
        attrs: {
          href: "https://fonts.gstatic.com",
          rel: "preconnect",
          crossorigin: true,
        },
      },
      {
        tag: "link",
        attrs: {
          href: "https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400;500;600;700;800;900&display=swap",
          rel: "stylesheet",
        },
      },
    ],
  },
});
