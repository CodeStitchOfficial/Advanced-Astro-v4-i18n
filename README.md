  <h3 align="center">Advanced Astro v4 - i18n</h3>

  <p align="center">
    This Astro advanced kit includes a pre-configured multi-language setup, along with five pages filled with CodeStitch components. Everything is ready to go right from the start, offering a fantastic introduction to the advantages of a Static Site Generator, complete with LESS preprocessing and a blog powered by Astro’s content collections. 
    <br/>
    <br/>
    <a href="https://advanced-astro-kit-i18n.netlify.app/" target="_blank">View Live Result</a>
  </p>

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Features](#features)
- [File Structure](#fileStructure)
  - [Root Files and Folders](#rootFilesAndFolders)
  - [Source Files and Folders](#sourceFilesAndFolders)
- [Getting Started](#gettingStarted)
- [Expanding the Project](#expandingTheProject)
  - [Reusing Code](#reusingCode)
  - [Adding More Pages](#addingMorePages)
  - [Navigation via NavData.json](#navigationViaNavData)
  - [Built-in Astro components](#builtinastrocomponents)
  - [i18n](#i18n)
  - [404](#404)
  - [Astro Content Collections](#AstroContentCollections)
- [Deployment](#deployment)
- [Acknowledgments](#acknowledgments)
- [Conclusion](#conclusion)

<a name="overview"></a>

## Overview

This Advanced kit includes a pre-configured <a href="https://www.astro.build">Astro</a> environment, which
allows for repeated components, centralized data and greater room to scale as your clients grow. The kit runs the latest major Astro version, v4. On top of this, internationalization has been provided througha [the Astrolicious i18n integration](https://github.com/astrolicious/i18n) to create a multilingual website, scalable to as many languages as necessary. The blog is powered by Astro's Content Collections. This can easily be adapted to anything which requires changing content, such as menus, job listing boards, portfolios and much more. It could even be extended by a CMS to allow your clients to manage their content on their own.

An example website has also been provided, with easy substitution of website sections possible through the use of <a href="https://codestitch.app/">CodeStitch's
vanilla component library</a>. This kit aims to get any project off the ground in as little time as possible, with deployment being possible in as little as two minutes. 


<a name="prerequisites"></a>

## Prerequisites

Only the vanilla web technologies are _required_ before using this kit, with some familiarity with Astro and React-style Components and props also recommended, but not essential. A lot of the leg-work for the non-vanilla technologies has been done for you. If you would like to read up on some of these things, we recommend the following resources:

1. [Astro's Documentation](https://docs.astro.build/en/getting-started/)
2. [Astro Crash Course in 20 Minutes!](https://www.youtube.com/watch?v=zrPVTf761OI)
3. [i18next Crash Course](https://www.youtube.com/watch?v=SA_9i4TtxLQ)


<a name="features"></a>

## Features

* Runs on Astro v4
* i18n setup ready to go, complete with routing and LanguageSelect component
* Dark mode
* Astro's `<ViewTransitions />` integration
* Astro's content collections to supercharge your Astro pages and content. 
* Accessible dropdown menus on desktop navigation and nested pages
* [CodeStitch](https://codestitch.app/) HTML and CSS blocks to build the UI.
* Perfect Lighthouse scores
  

This kit ships the following packages:
* [Astro Icon](https://www.astroicon.dev/) - Astro Icon is a straightforward icon system for the Astro framework.
* [Autoprefixer](https://www.npmjs.com/package/autoprefixer) - PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. It is recommended by Google and used in Twitter and Alibaba.
* [LESS](https://www.npmjs.com/package/less) - Less makes a few convenient additions to the CSS language, but you can also simply write standard CSS if you wish.
* [Astrolicious i18n](https://github.com/astrolicious/i18n) -  i18n integration for Astro with server and client utilities, type safety and translations built-in.

<a name="fileStructure"></a>

## File Structure

```
.
├── public/
|   |—— assets/
|   |   |—— favicons/
|   |   |—— fonts/
|   |   |—— images/
|   |   |—— js/
|   |   └── svgs/
|   |—— _redirects
|   |—— robots.txt
|   └── sitemap.html
├── src/
|   ├── assets/
|   |   └── images/
|   ├── components/
│   │   └── TemplateComponents /* contains all non-UI related components */
│   ├── content/ /* place your content collections in these sub-folders */
│   │   ├── blog/ 
│   │   └── config.ts /* optional - manages schemas for content collection */
│   ├── data/
│   │   ├── client.json /* modify your client's information here */
│   │   └── navData.json /* modify your navigation data here */
│   ├── icons/ /* place SVGS for the <Icon /> component here */
│   ├── locales/ /* place your json files for translations in these sub-folders */
│   │   ├── en 
│   │   └── fr
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── routes/ /* Managed by the i18n package; palce your "pages" here */
|   |   |── index.astro /* Accessible at / and /fr by default */
|   |   |—— about.astro /* Accessible at /about and /fr/about by default etc. */
|   |   |—— contact.astro
│   │   └── blog/
│   │   |   ├── [post].astro /* Dynamically generates individual blog pages */
│   │   |   └── index.astro /* Blog landing page */
│   │   └── projects/
│   │       ├── project-1.astro
│   │       └── project-2.astro
|   |── styles/
|   └── utils/
|       |── global.d.ts /* used by the ThemeProvider component */
|       └── utils.js /* place any utility functions here */
├── .astro.config.mjs
├── .postcss.config.cjs
└── tsconfig.json
```

<a name="rootFilesAndFolders"></a>

### Root Files and Folders

- public/ - All assets you don't want or need optimized by Astro. Include fonts and favicons in here. The \_redirects, robots.txt, and sitemap.xml also live here.
- src/ - Raw, source code. The folder you work in.
- .astro.config.mjs - Astro config file, already set up for you.


<a name="sourceFilesAndFolders"></a>

### Source Files and Folders

- data/ - Global data accessible across the project. Fill out client.json before you begin. Just import this data at the top of a file you want to include it.
- assets/ - Non-HTML files. Images, scripts and styles. It is important to note that any assets you want optimized by Astro (such as assets use din <Picture /> components for example) must be placed in `src/...`
- \_redirects - To configure redirects. Read more on <a href="https://docs.netlify.com/routing/redirects/">Netlify</a>
- content/ - Data to render pages from, such as the blog.
- index.astro - Home page
- robots.txt - Instructions for site crawlers. Learn more, and generate your own, <a href="https://en.ryte.com/free-tools/robots-txt-generator/">here</a>
- sitemap.xml - A map of the pages on the domain. Create your own after deployment <a href="https://www.xml-sitemaps.com/">here</a>
- tsconfig.json - A utility file used here to declare shortcuts for easier imports.

<a name="gettingStarted"></a>

## Getting Started

1. At the top right of the GitHub Repository, click the green _Use this template_ button,
   then click _Create a new repository_.
2. Follow the instructions to create a new repository, using this repo as a template.
3. When created, clone the repository to your local machine.
4. Run `npm install` to install all dependencies.
5. Run `npm run dev` to start the project and spin up a development server on `localhost:4321` and a Decap admin server on `localhost:8081`.

Running `npm run dev` will start a development server and begin LESS preprocessing.

Next, it is recommended to update `data/client.json` with some new information about this project. Through the power of templating, the
project's `<head>` and contact information will automatically be filled out, providing a first peek into some of the benefits of SSGs.

You can find all of CodeStitches `:root` variables, as well as .cs-topper, .cs-title and .cs-text, within the `root` stylesheet. Feel free to adjust these, or use our Content Flair micro-stitches, to update site-wide styles quickly.

In the `components` folder live all your custom components in `.astro` format. They take advantage of Astro's style-scoping. Any styles you write in `Header.astro` will not escape that file.

<a name="expandingTheProject"></a>

## Expanding the Project

Aimed towards freelancers, this kit was made with scalability and flexibility in mind, suiting a range of websites and client needs. As such, it is your choice whether you'd rather make small tweaks to the existing site, or clear all the page content and build a site all over again. Outlined below are some best
practices for when it comes to building on top of this kit:

<a name="reusingCode"></a>

### Reusing Code

The main advantage to using an SSG is it brings components, popularized by JavaScript-heavy frameworks like React or Vue, to vanilla HTML. As Astro is being
used, componentization can be achieved through JSX-like syntax within .astro files.

For example, there is a call to action at the bottom of most pages. As the text content or styles don't need to change, `<CTA />` was
used. If this wasn't the case, and we wanted the CTA text to change, we'd start to think about passing props to `<CTA />`.

An example of passing props to components is `Landing />`.

In `about.astro`:

```JS
---
// import the component
import Landing from "@components/Landing.astro";
---

<BaseLayout
  title="About"
  description="Meta description for the page"
  preloadImg="/assets/images/cabinets2.jpg"
>
  // Use the <Landing /> component
  <Landing 
    title="About Us" // pass a `title` prop to the component
  />
```

In `Landing.astro`
```JS
---
const { title } = Astro.props // Destructure the incoming props. Note the `Astrop.props` syntax
---

<h1 id="home-h">{title}</h1> // Consumme the title prop in the JSX markup

```

<a name="addingMorePages"></a>

### Adding More Pages

Thanks to Astro Navigation, adding new pages is as simple as adding a file to src/routes/ and including it in the `data/navData.json` file:

```JSX
---
// optional JavaScript frontmatter
---

<BaseLayout
  title="Page title for <title> and OG tags"
  description="Description for <meta> and OG tags"
>
    <!-- Page HTML goes here, without a <main> wrapper -->
</BaseLayout>
```

Starting from the top, you can see some data enclosed in --- tags. This is known as the page's front matter, which provides additional data to when it comes to
rendering your pages.

To add sub-pages, you will first need to create a new folder under `src/routes/` and populate it with `.astro` pages. Look at the `src/pages/projects` folder for an example. Don't forget to edit `navData.json` to handle the navigation. The navigation bar is already set up to create drop-down menus.

<a name="navigationViaNavData"></a>

### Navigation via navData.json

The header navigation in the project is powered by the `navData.json` file. Each page in the navigation should be included as an item with a `key` property (page title to be displayed) and a `url` property (include a trailing slash). 

To add subpages, populate the `children` array with page objects (i.e., object containing a `key` and `url` property.) If a page has a populated `children` array, a dropdown will be created, provided that a Navigation + Dropdown Stitch is being used (see below). Navigation links will render in the order they're declared.

If you wish to use an alternative Navigation stitch, you are welcome to swap out the `.cs-ul-wrapper` div in the Stitch for the one used in this starter kit. 
This will allow you to continue to reap the benefits of navigation vi navData.json. If you want to include dropdown menus in your navigation, you can use the `.cs-ul-wrapper` div below

> Note: we have customised this navigation wrapper to include better accessibility features, which you will not find in navigation stitches.

``` JSX
<ul id="cs-expanded-ul" class="cs-ul">
          <!-- Note: the `:any` type on the entry is used solely to stop TypeScript from throwing warnings -->
          {navData.map((entry: any) => (
            <li
              class:list={[
                "cs-li",
                { "cs-dropdown": entry.children?.length > 0 },
              ]}
              
            >
              {entry.children?.length > 0 ? (
                // If entry has children in navData.json, create a button and a dropdown icon
                <button
                aria-expanded="false"
                aria-controls={`submenu-${entry.key}`}
                  class:list={[
                    "cs-li-link cs-dropdown-button",
                    { "cs-active": Astro.url.pathname.includes(entry.url)},
                  ]}
                >
                  {t(entry.key)}
                  <Icon name="mdi--caret" class="cs-drop-icon" />
                </button>
              ) : (
                // If entry does not have children in navData.json, create an anchor
                <a
                  href={getLocalePath(entry.url)}
                  class:list={[
                    "cs-li-link",
                    { "cs-active": Astro.url.pathname === getLocalePath(entry.url) },
                  ]}
                  aria-current={Astro.url.pathname === getLocalePath(entry.url) ? "page" : undefined}
                >
                  {t(entry.key)}
                </a>
              )}
              
              {entry.children?.length > 0 && (
                // If entry has children in navData.json, create a drop down menu
                <ul id={`submenu-${entry.key}`} class="cs-drop-ul">
                  {entry.children.map((child) => (
                    <li class="cs-drop-li">
                      <a 
                        href={getLocalePath(child.url)}
                        class="cs-li-link cs-drop-link"
                        aria-current={Astro.url.pathname === getLocalePath(child.url) ? "page" : undefined}
                      >
                        {t(child.key)}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
```


<a name="builtinastrocomponents"></a>

### Built-in Astro components: `<Image />` and `<Picture />`
This kit demonstrates the use of the built-in `<Picture />` component, [for which you can read the documentation here](https://docs.astro.build/en/guides/images/#picture-). However, not all native HTML `<picture>` elements from CodeStitch blocks have been replaced with Astro's `<Picture />` components. CodeStich users will have to decide which one they want to use:
 * CodeStich blocks already have fully-functionning `<picture>` elements that perform very well. However, the developper will have to do a time-consumming job with resizing and reformatting assets.
 * Astro's `<Picture />` components must be manually written to replace stitches. On the other hand, they automatically process and optimize assets, which allows the developper to skip the resizing and reformatting preparation work.


<a name="i18n"></a>

### i18n

Internationalization is powered by the [I18n for Astro integration plugin](https://astro-i18n.netlify.app/). This project is set up to work with two languages out of the box, English (default language) and French. 

This plugin brings 4 major changes to our project structure:

1. in `astro.config.js`

```JS
i18n({
    defaultLocale: "en",
    locales: ["fr", "en"],
    client: {
      data: true,
    },
  })
```

This allows to configure the integration. This minimal set up here configures the languages in your project. You can check the [configuration documentation](https://astro-i18n.netlify.app/usage/configuration/#_top) for more options to pass to this configuration object.

2. The `routes` directory

Unlike a monolingual Astro project, the `routes` directory is where most of your `.astro` pages will live and what the integration uses to create routing. Any `.astro` file placed in this `routes` directory will be accessible from all locales. For example, `index.astro` will be accessible at `/blog` and `/fr/blog` by default.

![alt text](/public/assets/images/docs/image.png)

The `pages` directory can still be used. It's useful when you want some urls to be unique, ie. not translated like API routes (eg. under pages/api)
in 1 locale only (eg. /pages/fr/test won't be handled in a special way)

3. The `locales` directory
The `locales` directory will have one sub-directory for each locale in your project. This is where the translations live, in `.json` files. You are free to organize your translations as you with, but you must provide at least a `src/locales/en/common.json` for each locale. These json files are also referred to as namespaces.

These json files must have the same name and the same organisation of key/values pairs. The only difference will obviously be the translated content.

The default (and mandatory) name space is `common.json`. In this kit, we also use extra name spaces so that `common.json` doesn't become too bloated. You can use `common.json` for translations of repeated components, and other name spaces for individual pages for example. 

For example:
`/locales/en/common.json`
```
{
  "home": "Home",
  "about": "About",
  "projects": "Projects",
  "project-1": "Project 1",
  "project-2": "Project 2",
}
```

`/locales/fr/common.json`
```
{
  "home": "Accueil",
  "about": "A propos",
  "projects": "Projets",
  "project-1": "Projet 1",
  "project-2": "Projet 2",
}
```

4. Accessing the namespaces' data and translating with the `t()` function.

Under the hood, [i18next](https://www.i18next.com/) is used to manage translations. We enforce the following conventions:

* Locales must live in the src/locales/ directory (can be customized with localesDir)
* A folder for the default locale is required, eg. `src/locales/en/`
* Provide at least a `src/locales/en/common.json` file (can be customized with defaultNamespace)

To access data from a name space in an .`astro` file, we use the `t` function. Don't forget to import it first in your astro file with  `import { t } from "i18n:astro";`.

  1. First, we create the json data. 

`src/locales/fr/common.json`
```json
"ctaComponent": {
    "title1": "Confiez votre projet",
    "title2": "à nos experts",
    "message": "Dites quelque chose d'accrocheur, d'informatif et d'encourageant à cliquer sur le bouton pour aller à la page de contact. J'aime ajouter cette bannière en bas de chaque page.",
    "cta":"Obtenir un devis"
},
```

  2. Then, in our `.astro` file, we import the `t` function and use it in JSX:

`src/components/CTA.astro`
```JSX
---
import { t } from "i18n:astro";
---
<div class="container">
  <h2 class="title">
    {t("ctaComponent.title1")}
    <br />
    {t("ctaComponent.title2")}
  </h2>
  <p>
    {t("ctaComponent.message")}
  </p>
  <a href="/contact" class="cs-button-solid">{t("ctaComponent.cta")}</a>
</div>
```

To access data from a name space other than `common.json`, the syntax will be slightly different: we must prefix with the name of the name space.

`home.json`
```json
"layout": {
    "title": "Pixel Perfect Websites",
    "description": "Meta description for the page"
},
```
Use `{t("home:layout.title")}` to access the `title` key from the `layout` object in the `home` namespace (=.json file)


`home.json`
```json
"services": [
    {
        "heading": "Service 1",
        "p": "Talk about the service with keywords people will be searching for it by. Keep it 1-2 sentences."
    },
    {
        "heading": "Service 2",
        "p": "Talk about the service with keywords people will be searching for it by. Keep it 1-2 sentences."
    },
    {
        "heading": "Service 3",
        "p": "Talk about the service with keywords people will be searching for it by. Keep it 1-2 sentences."
    }
],
```

To access data nested in arrays with the `t` function, you can use this syntax: `<h2>{t("home:services.0.heading")}</h2>`, where 
* `home:` is the name of the json namespace file
* `0` here is the `[0]` index of the array.
* `.heading` is tkey object key to access

The t function is re-exported from i18next and benefits from type-safety automatically. Have a look at [i18next docs](https://www.i18next.com/) to learn more.

<a name="404"></a>

### 404

As we are creating a fully static site, we need to generate a 404 page per locale and rewrite paths with the hosting provider. This is respectively handled in `src/routes/404.astro` for the page and in the `public/_redirects` file for rewriting paths for projects hosted on **Netlify**.
For other hosting providers, or if you want a solution for a hybrid/server-side rendering site, please look at the [i18n package documentation](https://astro-i18n.netlify.app/recipes/translated-404-pages/).


<a name="astroContentCollections"></a>

### Astro content collections

In `/src/content`, you will see a `config.ts` file. This is where you can configure [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/). This step is **not necessary**, but it will supercharge your Astro pages and content. Collections help to 
  * organize your documents, 
  * validate your frontmatter, 
  * provide automatic TypeScript type-safety for all of your content,

This template already has Content Collections configured for immediate use of the blog content, but you could use them to power up the Portfolio or Gallery for example.

### CSS

Most CSS will be written within the components it's styling via **scoping**. Scoped styles are compiled behind-the-scenes to only apply to HTML written inside of that same component. The CSS that you write inside of an Astro component is automatically encapsulated inside of that

As this kit runs `less`, we use the `<style lang="less"></style> tags to write our scoped CSS.

You can also use standalone `less` stylesheets, located in `src/styles`. Don't forget to import them in your component.


<a name="deployment"></a>

## Deployment
0. Before you deploy, it is recommended to test the build. Run `npm run build` to build the project. Once done, run `npm run preview` which you can access on http://localhost:4321/. This allows you to test your website as if it was deployed on your host.
1. Ensure the sitemap, robots.txt and \_redirects have been filled out. Instructions and tools for how to do so can be found in the File Structure section
2. Navigate to your Netlify Admin Panel, click _Add new site | Import an existing project_
3. Follow the instructions to connect your GitHub repository to Netlify.
4. Once deployed, go to the project's page, click on `Site configuration` then `Identity` in the navigation, then click `Enable Identity`
5. Invite yourself, and the client, to the site
6. While in the Identity tab, click the "Settings and usage" button to open the settings options. Then, do the following:
    * Go to `Registration / Registration Preferences`, and set registration from Public to Invite Only
    * Go to `Registration / External Providers` and add a provider. We recommend Google, so the client can login with Google in 1 click.
    * Go to `Services / Git Gateway` and enable it.


<a name="acknowledgments"></a>

## Acknowledgments

The author would like to acknowledge:
* [Cedar Studios](https://github.com/cedar-studios) - Their [Intermediate-Astro-Kit-LESS](https://github.com/cedar-studios/Intermediate-Astro-Kit-LESS/tree/master) is the base of this template.
* [CodeStitch](https://codestitch.app/) - The UI was built with their stitches.
* [Starlight](https://starlight.astro.build/) - The ThemeProvider and Select components are derived from Starlight



<a name="Conclusion"></a>

## Conclusion
I hope that this kit will prove useful to you. If you have any questions or would like to connect, feel free to reach out on [Twitter](https://twitter.com/BuckyBuck135) or at `buckybuck` on Discord.

Happy coding!
***Geoffrey***
