import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import i18n from "@astrolicious/i18n";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(), 
    i18n({
      defaultLocale: "en",
      locales: ["fr", "en"],
      client: {
        data: true,
      },
    })
  ]
});