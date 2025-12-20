/*
 * Website for IEEE SB CETKR
 * Copyright (C) 2025 IEEE Student Branch CETKR
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import playformCompress from "@playform/compress";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://ieeesbcetkr.org",
  base: "/",
  integrations: [
    sitemap(),
    react(),
    playformCompress({
      Image: true,
      CSS: false,
      HTML: true,
    }),
    mdx({
      smartypants: false,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
