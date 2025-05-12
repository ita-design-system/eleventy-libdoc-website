---
title: Eleventy LibDoc
description: An Eleventy starter project to craft slick documentation
layout: libdoc_page.liquid
permalink: index.html
---
Eleventy LibDoc is a starter project for [Eleventy][11ty] to craft slick web related code documentation.

## Getting started

1. Clone or fork <https://github.com/ita-design-system/eleventy-libdoc>
2. Run `npm install`
3. Enter your own settings in `settings.json`. Learn more about [configuration](/content/configuration/index.md).
4. Build `npx @11ty/eleventy`

## Key features

*   **Accessibility**<br>
    LibDoc was developed with accessibility awareness. 
*   **Content focused**<br>
    LibDoc is easy to install, use and deploy.
*   **Performance**<br>
    Low front-end dependencies and vanilla JS self-made components make LibDoc cross-browser compatibility and high-grade performances.<br>
    <a  href="https://pagespeed.web.dev/analysis/https-eleventy-libdoc-netlify-app/okp372ch64?form_factor=mobile" target="_blank">
        View performances
    </a>
*   **Printable**<br>
    Every page created with LibDoc can be printed. Try to print preview this page in PDF!<br>
    <button type="button" class="btn mt-2" onclick="print()">print preview</button>

## Configuration

Start entering your own settings into `settings.json` at the root of the project. [Configuration documentation](https://eleventy-libdoc.netlify.app/configuration/).

*   [Language configuration](https://eleventy-libdoc.netlify.app/configuration/language/) <br>
    Every <abbr title="User Interface">UI</abbr> text string of Eleventy LibDoc is identified as a key which allows to easily extend it with more languages.
*   [Site title and description](https://eleventy-libdoc.netlify.app/configuration/site-title-and-description/)<br>
    Involved in <abbr title="Search Engine Optimization">SEO</abbr>, site title and description take part of the most important settings to be set at project start.
*   [Site logo configuration](https://eleventy-libdoc.netlify.app/configuration/site-logo/)<br>
    Optionally replace text link by logo image.
*   [Author configuration](https://eleventy-libdoc.netlify.app/configuration/author/).<br>
    Choose to display or not a default author on each page. Override this setting on each page created.
*   [Favicon URL](https://eleventy-libdoc.netlify.app/configuration/favicon/)<br>
    Set your own favicon, overridable on each page created.
*   [Custom links configuration](https://eleventy-libdoc.netlify.app/configuration/custom-links/)<br>
    Into the primary navigation, display important links that visitors may need to see on each page you create.
*   [Open Graph Image configuration](https://eleventy-libdoc.netlify.app/configuration/open-graph-image/).<br>
    Set the image displayed when visitors share your pages.
*   [Table of Content configuration](https://eleventy-libdoc.netlify.app/configuration/table-of-content/)<br>
    When content amount is greater than a threshold, a table of content is displayed into page header.
*   **Floating table of content**<br>
    In addition of main <abbr title="Table Of Content">TOC</abbr>, a floating table of content appears when visitor scrolls. Just like main TOC, the floating TOC displays anchor links to headings and also current visible part of the page.
*   [HTML Base configuration](https://eleventy-libdoc.netlify.app/configuration/html-base/).<br>
    Allows to deploy your build into a sub domain instead of root. Computes input path and every <abbr title="Uniform Resource Locator">URL</abbr> to fit to the sub domain target.
*   [Syntax highlighting configuration](https://eleventy-libdoc.netlify.app/configuration/highlight-js/)<br>
    Adjust your own supported languages for syntax highlighting.


## Creating content

Easily write documentation with Markdown and <abbr title="Hyper Text Markup Language">HTML</abbr>.

*   [Markdown](https://eleventy-libdoc.netlify.app/creating-content/markdown/)<br>
    Perfect to write content with common semantics.
*   [Inline HTML](https://eleventy-libdoc.netlify.app/creating-content/inline-html/)<br>
    Allows to enhance markdown unsupported semantics.
*   [Widgets](https://eleventy-libdoc.netlify.app/creating-content/widgets/)<br>
    Useful for advanced and specific usages.
    *   [Alerts](https://eleventy-libdoc.netlify.app/creating-content/widgets/alerts/)<br>
        Simple paragraphs that displays informations to highlight.
    *   [Buttons](https://eleventy-libdoc.netlify.app/creating-content/widgets/buttons/)<br>
        Form buttons and links to create Call To Actions.
    *   [Definition lists](https://eleventy-libdoc.netlify.app/creating-content/widgets/definition-lists/)<br>
        How to use definition lists.
    *   [Details and accordion](https://eleventy-libdoc.netlify.app/creating-content/widgets/details-and-accordions/)<br>
        Create simple dropdown toggle and accordions.
    *   [Embeds](https://eleventy-libdoc.netlify.app/creating-content/widgets/embeds/)<br>
        Code integration results of various content providers.
    *   [Icons](https://eleventy-libdoc.netlify.app/creating-content/widgets/icons/)<br>
        Available icons to use with the content.
    *   [Images](https://eleventy-libdoc.netlify.app/creating-content/widgets/images/)<br>
        Ready to use HTML to highlight your images.
    *   [Sandboxes](https://eleventy-libdoc.netlify.app/creating-content/widgets/sandboxes/)<br>
        Simple HTML resources separated from LibDoc’s pages scope and embedded into a LibDoc page.
*   [Tags](https://eleventy-libdoc.netlify.app/front-matter/tags/)<br>
    Assign keywords into your pages to create topics.
*   [Blogging](https://eleventy-libdoc.netlify.app/creating-content/blogging/)<br>
    Each page tagged with `post` is displayed into a blog feed.

## Primary navigation

One of the most important element of the user interface. [Primary navigation documentation](https://eleventy-libdoc.netlify.app/primary-navigation/)

*   [Home page link](https://eleventy-libdoc.netlify.app/primary-navigation/homepage-link/)<br>
    Always visible, redirects to the root of the project.
*   [Search input](https://eleventy-libdoc.netlify.app/primary-navigation/search-input/)<br>
    Quickly get search results from any text query entered into the input search form.
*   [Search occurrences](https://eleventy-libdoc.netlify.app/primary-navigation/search-occurrences/)<br>
    Easily navigate into a page clicked from a search result.
*   [Eleventy Navigation](https://eleventy-libdoc.netlify.app/primary-navigation/eleventy-navigation/)<br>
    Organize your content with infinite-depth hierarchical navigation.
*   **Eleventy breadcrumb**<br>
    Automatic breadcrumb is created from Eleventy navigation.

## Files tree

*   `_data/`  <br>
    ⤷ Eleventy [data global](https://www.11ty.dev/docs/data-global/)
    *   `libdocConfig.js`  <br>
        ⤷ returns default or user defined LibDoc parameters.<br>
        Learn more in [configuration](https://eleventy-libdoc.netlify.app/configuration/)
    *   `libdocFunctions.js`  <br>
        ⤷ manages filters, shortcodes, collections, [widgets](https://eleventy-libdoc.netlify.app/creating-content/widgets/), etc.
    *   `libdocMessages.json`  <br>
        ⤷ contains i18n strings for user interface. <br>
        Learn more in [languages](https://eleventy-libdoc.netlify.app/configuration/language/)
    *   `libdocSystem.json`  <br>
        ⤷ contains non user related parameters.
    *   `libdocUtils.js`  <br>
        ⤷ contains helpful and ready to use UI and content functions.
*   `_includes/`  <br>
    ⤷ Eleventy directory for includes. Learn more at [includes](https://www.11ty.dev/docs/config/#directory-for-includes)
    *   `libdoc_before_html.liquid`  <br>
        ⤷ prepares variables to display before writing HTML.
    *   `libdoc_breadcrumb.liquid`  <br>
        ⤷ markup for breadcrumb.
    *   `libdoc_page.liquid`  <br>
        ⤷ the most important template to [create pages](https://eleventy-libdoc.netlify.app/creating-content/)
    *   `sandbox.liquid`  <br>
        ⤷ the dedicated template for [sandboxes](https://eleventy-libdoc.netlify.app/creating-content/widgets/sandboxes/)
*   `assets/`  
    ⤷ Dedicated user directory for static files like CSS, JS, images etc. Any file into this directory is copied into the build folder. Learn more about [passThroughCopy](https://www.11ty.dev/docs/copy/)
*   `core/`  <br>
    ⤷ LibDoc system directory for UI layouts and assets.
    *   `assets/`  <br>
        ⤷ Directory containing all CSS, JS and font files to make LibDoc user interface working properly.
        *   `js/`
        *   `fonts/`
        *   `css/`
    *   `libdoc_blog.liquid`  <br>
        ⤷ blog related layout. Learn more about [blogging](https://eleventy-libdoc.netlify.app/creating-content/blogging/)
    *   `libdoc_search_index.liquid`  <br>
        ⤷ builds search index JSON file.
    *   `libdoc_search.html`  <br>
        ⤷ layout dedicated to search results.
    *   `libdoc_tag.liquid`  <br>
        ⤷ layout that displays a list of pages tagged with a specific tag.
    *   `libdoc_tags.liquid`  <br>
        layout that displays the list of all tags available into your content.
*   `sandboxes/`  <br>
    ⤷ Dedicated user directory for [file sandboxes](https://eleventy-libdoc.netlify.app/creating-content/widgets/sandboxes/#file-sandbox)
*   `.eleventy.js`  <br>
    ⤷ Eleventy config file. Learn more about [configuration](https://www.11ty.dev/docs/config/)
*   `.eleventyignore`  <br>
    ⤷ File and directories not to process in Eleventy. Learn more how to [ignore files](https://www.11ty.dev/docs/ignores/)
*   `.gitignore`  <br>
    ⤷ Files and directories to ignore in Git.
*   `favicon.png`  <br>
    ⤷ Default favicon file. Learn more about [favicon](https://eleventy-libdoc.netlify.app/configuration/favicon/)
*   `package-lock.json`  <br>
    ⤷ Node package file.
*   `package.json`  <br>
    ⤷ Node package file.
*   `settings.json`  <br>
    ⤷ Project settings. Learn more about [configuration](https://eleventy-libdoc.netlify.app/configuration/)

[11ty]: https://www.11ty.dev/