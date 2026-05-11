---
layout: libdoc_page
permalink: "{{ libdocConfig.blogSlug }}/{{ page.fileSlug }}/index.html"
tags:
    - post
    - changelog
title: Change log LibDoc v0.14.9
description: Wrap tables with ids
date: 2026-05-11
# ogImageUrl: "https://raw.githubusercontent.com/ita-design-system/ita-medias/refs/heads/main/libdoc-v0.11.0.avif"
---
[Release v0.14.9 on Github](https://github.com/ita-design-system/eleventy-libdoc/releases/tag/0.14.9)

## Features

[@gbeine](https://github.com/gbeine) Instead of just wrapping `<table>`, recognize `<table` as pattern. This allows users to create content with specific tables ready for jQuery DataTables.
