# Advanced Astro v4 i18n

## [1.0.1] - 2023-01-05

### Patch Changes

- [#17](https://github.com/CodeStitchOfficial/Advanced-Astro-v4-i18n/pull/17) [`8a346bb`](https://github.com/CodeStitchOfficial/Advanced-Astro-v4-i18n/commit/8a346bb5d640407bbb5c7a10d645cd0717f671ab) Thanks [@Masoud-M](https://github.com/Masoud-M)! - Fixes meta tag title to make it check for any language in the config.

    * Adds utility functions in utils.ts

```
//utils.ts
export function trimArrSlashes(arr: string[]) {
  return arr.map((str) => str.replace(/^\/+|\/+$/g, ""));
}

export function trimStringSlashes(arr: string) {
  return arr.replace(/^\/+|\/+$/g, "");
}
```

* Adds support for checking any language to create the meta title

```
//BaseLayout.astro
---
+ import { getHtmlAttrs, getLocales, t } from "i18n:astro";
+ import { trimArrSlashes, trimStringSlashes } from "@utils/utils";
+ const locales = getLocales();
+ // Trimming "/" from the beginning and end to handle URLs with or without trailing slashes.
+ const trimmedLocales = trimArrSlashes(locales);
+ const trimmedPathname = trimStringSlashes(Astro.url.pathname);
+ const isLandingPage = Astro.url.pathname === "/" || trimmedLocales.includes(trimmedPathname);
---

- {Astro.url.pathname === "/" ?  (`${ title }
+ {isLandingPage ?  (`${ title }
```

## [1.0.0] - 2023-10-05

### Added
- Initial release of Advanced Astro v4 with i18n support.
