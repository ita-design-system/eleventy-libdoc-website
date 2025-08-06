---
layout: libdoc_page
permalink: "{{ libdocConfig.blogSlug }}/{{ page.fileSlug }}/index.html"
tags:
    - post
    - changelog
    - custom-links
    - atom-feed
title: Change log LibDoc v0.10.0
description: Added Atom feed and improved custom links layout
date: 2025-08-06
ogImageUrl: "https://raw.githubusercontent.com/ita-design-system/ita-medias/refs/heads/main/libdoc-v0.10.0.avif"
---
[Release v0.10.0 on Github](https://github.com/ita-design-system/eleventy-libdoc/releases/tag/0.10.0)

<figure>
    <img src="{{ ogImageUrl }}"
        alt="Added Atom feed and improved custom links layout">
    <figcaption>Added Atom feed and improved custom links layout</figcaption>
</figure>

Features:

* Added [Atom feed](/content/creating-content/blogging.md#atom-feed). 
* New custom links layout management: Progressive collapse of custom links. If links gets wider than their container, overflowed links are grouped into a sub menu.
* Added `productionUrl` [configuration parameter](/content/configuration/production-url.md).
* Improved design for blockquotes.

Fixes:

* Bad responsive width for blockquotes
