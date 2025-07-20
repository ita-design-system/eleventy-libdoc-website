---
layout: libdoc_page
permalink: "{{ libdocConfig.blogSlug }}/{{ page.fileSlug }}/index.html"
tags:
    - post
    - changelog
    - color-schemes
title: Change log LibDoc v0.7.0 - Introducing user preferences menu and color schemes
description: List of added features and fixes
date: 2025-07-19
ogImageUrl: "https://raw.githubusercontent.com/ita-design-system/ita-medias/refs/heads/main/libdoc.v0.7.0.dark.mode.avif"
---
<figure class="long-shadow">
    <img src="https://raw.githubusercontent.com/ita-design-system/ita-medias/refs/heads/main/libdoc.v0.7.0.dark.mode.avif"
        alt="Illustration screenshot of LibDoc’s both light and dark modes">
    <figcaption>Illustration screenshot of LibDoc’s both light and dark modes</figcaption>
</figure>

[Release v0.7.0 on Github](https://github.com/ita-design-system/eleventy-libdoc/releases/tag/0.7.0)

Features:

* New user preferences menu at the top of each page.
* Introducing dark mode color scheme: User can choose its preferences.
* Improved primary color for better [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/).
* Added parameter: Default image background color.
* Skeleton loader on search result while search index is fully loaded.
* Improved search results layout.
* Added contrast icon.
* Separated CSS files between layout and colors schemes.
* Better wording for small devices navbar.
* Better font legibility.

Fixes:

* Bad external link icon contrast
* Mixed lists numbered bullets position
* Inline code font size too large for tables