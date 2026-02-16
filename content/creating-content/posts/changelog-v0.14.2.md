---
layout: libdoc_page
permalink: "{{ libdocConfig.blogSlug }}/{{ page.fileSlug }}/index.html"
tags:
    - post
    - changelog
title: Change log LibDoc v0.14.2
description: Custom icons, size and colors
date: 2026-02-16
# ogImageUrl: "https://raw.githubusercontent.com/ita-design-system/ita-medias/refs/heads/main/libdoc-v0.11.0.avif"
---
[Release v0.14.2 on Github](https://github.com/ita-design-system/eleventy-libdoc/releases/tag/0.14.2)

## Features

* [Icon](https://eleventy-libdoc.netlify.app/creating-content/widgets/icons/) and [Icon Cards](https://eleventy-libdoc.netlify.app/creating-content/widgets/icon-cards/) **now support your own icons**.
    * Widgets **support both SVG and raster images with transparency**. You can set a **path or a remote URL** as name for the icon.
    * [Custom sizes](https://eleventy-libdoc.netlify.app/creating-content/widgets/icons/#inherited-icon-size)
    * [Custom colors](https://eleventy-libdoc.netlify.app/creating-content/widgets/icons/#custom-color)
* Removed [icomoon](https://icomoon.io/) dependency.

## Fixes

Improved inline `<code>` background color into `<table>` tags.