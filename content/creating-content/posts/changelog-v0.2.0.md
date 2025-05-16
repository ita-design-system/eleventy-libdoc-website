---
layout: libdoc_page
permalink: "{{ libdocConfig.blogSlug }}/{{ page.fileSlug }}/index.html"
tags:
    - post
    - changelog
title: Change log LibDoc v0.2.0
description: List of added features and fixes
date: 2025-05-02
---
[Release v0.2.0 on Github](https://github.com/ita-design-system/eleventy-libdoc/releases/tag/0.2.0)

Features added:

* change copy to clipboard confirmation design in place
* added consistency on abbr tag on Safari, Chrome and FF
* auto adjust sidebar height to its content
* added widget buttons
* buttons widgets
* added a max width for global container
* added widget embeds
* added parent navigation title on post lists
* added soft shadow on main UI elements
* revamp styling of `ul` and `ol`
* added limited max width on floating TOC for small devices
* added floating TOC open close user preference. Page reload with same state
* added touch device detection on body
* added image rounded corners configuration parameter
* set default multiple img widths
* added widget details and accordion

Fixes:

* change BEM class names for alert
* spacing between sandbox button commands
* exceeding max width for blockquote causes overflow
