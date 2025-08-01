---
layout: libdoc_page
permalink: "{{ libdocConfig.blogSlug }}/{{ page.fileSlug }}/index.html"
tags:
    - post
    - changelog
title: Change log LibDoc v0.9.0
description: Improved tags list layout
date: 2025-08-01
ogImageUrl: "https://raw.githubusercontent.com/ita-design-system/ita-medias/refs/heads/main/libdoc-v0.9.0.avif"
---
[Release v0.9.0 on Github](https://github.com/ita-design-system/eleventy-libdoc/releases/tag/0.9.0)

<figure class="long-shadow">
    <img src="{{ ogImageUrl }}"
        alt="Improved tags list layout">
    <figcaption>Improved tags list layout</figcaption>
</figure>

Features:

* Slighty improved tags list page with tags ordered by popularity.
* `date: 1111-11-11` [Front matter date](/content/front-matter/date.md#git-last-modified-date) value parameter that truly display git last commit date.
* Improve fuzzy search: 
    * No display for blog item if no post.
    * No display for tags list item if `displayTagsListLink` configuration is set to `false`.
* Improved UI difference between `<code>` and `<kbd>` tags
* Added `star` and `star-fill` icons

Fixes:

* On small screens when menu is opened, user preferences button gets over toggle menu button [#32](https://github.com/ita-design-system/eleventy-libdoc/issues/32)
* Fuzzy search popup menu may be partially masked by overflow hidden of primary navigation.
