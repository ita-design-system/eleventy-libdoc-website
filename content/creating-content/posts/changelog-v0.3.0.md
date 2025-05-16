---
layout: libdoc_page
permalink: "{{ libdocConfig.blogSlug }}/{{ page.fileSlug }}/index.html"
tags:
    - post
    - changelog
title: Change log LibDoc v0.3.0
description: List of added features and fixes
date: 2025-05-12
---
[Release v0.3.0 on Github](https://github.com/ita-design-system/eleventy-libdoc/releases/tag/0.3.0)

Features added:

* User configuration file `settings.json` at the root of the project
* Filter and shortcode for embeds / iframes
* Details accordions widget
* Image rounded corners by default in configuration
* Revamp styling `<ul>` and `<ol>` + mixed content
* Floating TOC open close user preference. Page reload with same state
* Floating TOC placement optimization
* Strip HTML in site title and description
* Soft shadow on main UI elements
* SEO link explicit text
* Default blog description is false
* Added production URL system parameter
* Documentation for LibDoc’s presentation page
* Better line height on table cells
* Touch device detection on body
* Optimized transcoded image widths from 11ty Image plugin
* Font fallback adjustments
* Added credits page
* New favicon

Fixed:

* Bad display for author into pages
* External link icon for libdoc's production URL
* Exceeding max width for blockquote causes overflow
* Contiguous sandboxes spacing
* Sandbox and wide image max width
* Bad contrast for quote tags in syntax highlighter