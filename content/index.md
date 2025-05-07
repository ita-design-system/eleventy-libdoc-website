---
title: Eleventy LibDoc
description: An Eleventy starter project to craft slick documentation
layout: libdoc_page.liquid
permalink: index.html
---
Eleventy LibDoc is a starter project for [Eleventy][11ty] to craft slick web related code documentation.

1. Clone or fork <https://github.com/ita-design-system/eleventy-libdoc>
2. Run `npm install`
3. Enter your own settings in `settings.json`. [Learn more](/content/configuration/index.md).
4. Build `npx @11ty/eleventy`

---

* **Configuration** <br>settings.json at the root of the project defines project’s settings.
    * **Language**. <br>Every <abbr title="User Interface">UI</abbr> text string of Eleventy LibDoc is identified as a key which allows to easily extend it with more languages.
    * **Site title and description** <br>Involved in <abbr title="Search Engine Optimization">SEO</abbr>, site title and description take part of the most important settings to be set at project start.
    * **Site logo** <br>Optionally replace text link by logo image 
    * **Author** <br>Choose to display or not a default author on each page. Override this setting on each page created.
    * **Favicon** <br>Set your own favicon, overridable on each page created.
    * **Custom links** <br>Into the primary navigation, display important links that visitors may need to see on each page you create.
    * **Open Graph Image** <br>Set the image displayed when visitors share your pages.
    * **Table of content** <br>When content amount is greater than a threshold, a table of content is displayed into page header.
    * **Floating table of content** <br>In addition of main <abbr title="Table Of Content">TOC</abbr>, a floating table of content appears when visitor scrolls. Just like main TOC, the floating TOC displays anchor links to headings and also current visible part of the page.
    * **Base** <br>Allows to deploy your build into a sub domain instead of root. Computes input path and every <abbr title="Uniform Resource Locator">URL</abbr> to fit to the sub domain target.
    * **Syntax highlighting** <br>Adjust your own supported languages for syntax highlighting.
* **Creating content** <br>Easily write documentation with Markdown and <abbr title="Hyper Text Markup Language">HTML</abbr>.
    * **Markdown** <br>Perfect to write content with common semantics.
    * **Inline HTML** <br>Allows to enhance markdown unsupported semantics.
    * **Widgets** <br>Useful for advanced and specific usages.
        * **Alerts** <br>Simple paragraphs that displays informations to highlight.
        * **Buttons** <br>Form buttons and links to create Call To Actions
        * **Definition lists** <br>How to use definition lists
        * **Details and accordions** <br>Create simple dropdown toggle and accordions
        * **Icons** <br>Available icons to use with the content
        * **Embeds** <br>Code integration results of various content providers
        * **Images** <br>Ready to use HTML to highlight your images
        * **Sandboxes** <br>Simple HTML resources separated from LibDoc’s pages scope and embedded into a LibDoc page.
    * **Tags** <br>Assign keywords into your pages to create topics.
    * **Blog** <br>Each page tagged with `post` is displayed into a blog feed.
* **Primary navigation** <br>One of the most important element of the user interface.
    * **Home page link** <br>Always visible, redirects to the root of the project.
    * **Search** <br>Quickly get search results from any text query entered into the input search form.
    * **Search occurrences** <br>Easily navigate into a page clicked from a search result.
    * **Eleventy navigation** <br>Organize your content with infinite-depth hierarchical navigation.
    * **Eleventy breadcrumb** <br>Automatic breadcrumb is created from Eleventy navigation.
* **Accessibility** <br>LibDoc was developed with accessibility awareness.
* **Performance** <br>Low front-end dependencies and vanilla JS self-made components make LibDoc cross-browser compatibility and high-grade performances.
* **Printable** <br>Every page created with LibDoc can be printed. Try to print preview this page in PDF!

---

* `_data/` <br>⤷  Eleventy [data global](https://www.11ty.dev/docs/data-global/).
    * `libdocConfig.js` <br>⤷ returns default or user defined LibDoc parameters. [Learn more](/content/configuration/index.md).
    * `libdocFunctions.js` <br>⤷ manages filters, shortcodes, collections, [widgets](/content/creating-content/widgets/index.md), etc. 
    * `libdocMessages.json` <br>⤷ contains i18n strings for user interface. [Learn more](/content/configuration/lang.md).
    * `libdocSystem.json` <br>⤷ contains non user related parameters.
    * `libdocUtils.js` <br>⤷ contains helpful and ready to use UI and content functions.
* `_includes/` <br>⤷ Eleventy directory for includes. [Learn more](https://www.11ty.dev/docs/config/#directory-for-includes).
    * `libdoc_before_html.liquid` <br>⤷ prepares variables to display before writing HTML.
    * `libdoc_breadcrumb.liquid` <br>⤷ markup for breadcrumb.
    * `libdoc_page.liquid` <br>⤷ the most important template to [create pages](/content/creating-content/index.md).
    * `sandbox.liquid` <br>⤷ the dedicated template for [sandboxes](/content/creating-content/widgets/sandboxes.md).
* `assets/` <br>⤷ Dedicated user directory for static files like CSS, JS, images etc. Any file into this directory is copied into the build folder.[Learn more](https://www.11ty.dev/docs/copy/).
* `core/` <br>⤷ LibDoc system directory for UI layouts and assets.
    * `assets/` <br>⤷ Directory containing all CSS, JS and font files to make LibDoc user interface working properly.
        * `js/`
        * `fonts/`
        * `css/`
    * `libdoc_blog.liquid` <br>⤷ blog related layout. [Learn more](/content/creating-content/blogging.md).
    * `libdoc_search_index.liquid` <br>⤷ builds search index JSON file.
    * `libdoc_search.html` <br>⤷ layout dedicated to search results.
    * `libdoc_tag.liquid` <br>⤷ layout that displays a list of pages tagged with a specific tag.
    * `libdoc_tags.liquid`<br>layout that displays the list of all tags available into your content.
* `sandboxes/` <br>⤷ Dedicated user directory for [file sandboxes](/content/creating-content/widgets/sandboxes.md#file-sandbox).
* `.eleventy.js` <br>⤷ Eleventy config file. [Learn more](https://www.11ty.dev/docs/config/).
* `.eleventyignore` <br>⤷ File and directories not to process in Eleventy. [Learn more](https://www.11ty.dev/docs/ignores/).
* `.gitignore` <br>⤷ Files and directories to ignore in Git.
* `favicon.png` <br>⤷ Default favicon file. [Learn more](/content/configuration/favicon.md).
* `package-lock.json` <br>⤷ Node package file.
* `package.json` <br>⤷ Node package file.
* `settings.json` <br>⤷ Project settings. [Learn more](/content/configuration/index.md)

[11ty]: https://www.11ty.dev/