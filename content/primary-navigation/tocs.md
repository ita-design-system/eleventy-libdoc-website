---
layout: libdoc_page
permalink: primary-navigation/tables-of-content/index.html
eleventyNavigation:
    key: Tables of content
    parent: Primary Navigation
    order: 85
    title: TOCs - Tables of content
# title: TOCs - Tables of content
description: Quickly navigate and scroll through long pages through main and floating tables of content
date: 1111-11-11
tags:
    - navigation
    - toc
---
Based on the content’s structure of heading tags levels (`<h1> to <h6>`), Eleventy LibDoc contains two Tables Of Content with anchor links that allows to quickly scroll to the different parts of the page.

* **Main Table Of Content** into each page header.
    * Generated from the build process.
    * Collapsable.
    * No JavaScript involved.
* **Floating Table Of Content** that displays when the main <abbr title="Table Of Content">TOC</abbr> is out of the browser window.
    * Scrollspy feature along the entire page: The floating TOC’s UI accentuates the currently visible parts of the page.
    * <abbr title="Floating Table Of Content">TOC</abbr> is collapsable.
    * Remembers its state when you go to another page.
    * Generated from client side, needs JavaScript enabled.
    * You can [try it on the markdown page](/content/creating-content/markdown.md)

<figure>
    <img src="/assets/images/libdoc-main-and-floating-tables-of-content.avif" alt="Short animation of both main and floating table of content" eleventy:ignore>
    <figcaption>Short animation of both main and floating table of content</figcaption>
</figure>

Learn more about <abbr title="Table Of Content">TOC</abbr> settings in [configuration - table of content](/content/configuration/toc.md).