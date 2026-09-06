import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";
import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import markdownConfig from "./markdown.config";

// https://astro.build/config
export default defineConfig({
  site: "https://setsuna.id",
  prefetch: true,
  markdown: {
    ...markdownConfig,
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    mdx({
      ...markdownConfig,
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "one-dark-pro",
      },
    }),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    robotsTxt({
      sitemap: [
        "https://setsuna.id/sitemap-0.xml",
        "https://setsuna.id/sitemap-index.xml",
      ],
    }),
    playformCompress(),
  ],
  // output: "server",
  // adapter: vercel({
  //   webAnalytics: {
  //     enabled: true
  //   },
  //   speedInsights: {
  //     enabled: true
  //   },
  //   imageService: true
  // })
});
