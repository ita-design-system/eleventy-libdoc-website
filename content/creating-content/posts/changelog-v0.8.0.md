---
layout: libdoc_page
permalink: "{{ libdocConfig.blogSlug }}/{{ page.fileSlug }}/index.html"
tags:
    - post
    - changelog
title: Change log LibDoc v0.8.0
description: Improved search experience
date: 2025-07-28
---
[Release v0.8.0 on Github](https://github.com/ita-design-system/eleventy-libdoc/releases/tag/0.8.0)

Features:

* **Improved search experience** with the [search input](/content/primary-navigation/search-input.md) that now supports both standard search and fuzzy search:
    * *Standard search*: find the exact query of the typed characters.
    * *Fuzzy search*: quickly find any page by typing some characters even in wrong order.
* **Keyboard shortcut 🆂** makes focus on search input.
* Improved search occurrence display.
* Improved display for popups.
* Improved no javascript display for code.
* Added Italian language translation <https://github.com/ita-design-system/eleventy-libdoc/pull/27>

Fixed:

* JSON index for fuzzy and search may cause errors, simplified JSON build.
* Search results skeleton does not display at the right moment.

