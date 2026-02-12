// @ts-check
import {defineConfig} from 'astro/config';
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

const LIVE_URL = 'https://LANcedillo.github.io/portafolio';
const DEV_URL = 'http://localhost:3000/';
const SCRIPT = process.env.npm_lifecycle_script || '';
let base_url = DEV_URL;

if (SCRIPT.includes('astro build')) {
    base_url = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
    site: base_url,
    output: "static",
    integrations: [mdx(), react(), tailwind(
        // {applyBaseStyles: false,}
), icon(), sitemap()],
    markdown: {
        shikiConfig: {
            theme: 'plastic',
            wrap: true,
        },
    }});