---
layout: libdoc_page
permalink: "{{ libdocConfig.blogSlug }}/{{ page.fileSlug }}/index.html"
tags:
    - post
    - changelog
    - toc
title: Change log LibDoc v0.11.0
description: Improved floating table of content legibility, alerts widgets and page tag popularity UI
date: 2025-09-05
ogImageUrl: "https://raw.githubusercontent.com/ita-design-system/ita-medias/refs/heads/main/libdoc-v0.11.0.avif"
---
[Release v0.11.0 on Github](https://github.com/ita-design-system/eleventy-libdoc/releases/tag/0.11.0)

<figure>
    <img src="{{ ogImageUrl }}"
        alt="{{ description }}">
    <figcaption>{{ description }}</figcaption>
</figure>

Features:

* Improved legibility for floating table of content links containg large amount of links.
* Better UI for the page tag popularity, progress bar replaces star rating that may cause confusion between page popularity and user reviews.
* Improved spacing between main page header and content.

Fixes:

* User preferences menu that may appear on print preview.
