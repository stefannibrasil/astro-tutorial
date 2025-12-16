// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://dancing-speculoos-07b710.netlify.app/",
  integrations: [preact()],
});