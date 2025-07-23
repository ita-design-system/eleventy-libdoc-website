---
layout: libdoc_page
permalink: "{{ libdocConfig.blogSlug }}/{{ page.fileSlug }}/index.html"
tags:
    - post
    - changelog
title: Change log LibDoc v0.7.1
description: Fixed sandbox result tab background color should always be white
date: 2025-07-23
---
[Release v0.7.1 on Github](https://github.com/ita-design-system/eleventy-libdoc/releases/tag/0.7.1)

Fixed <https://github.com/ita-design-system/eleventy-libdoc/issues/20>.

{% sandbox %}
<p>If unset, result tab background color is always white even in dark mode.</p>
{% endsandbox %}
