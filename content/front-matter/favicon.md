---
layout: libdoc_page
permalink: front-matter/favicon/index.html
eleventyNavigation:
    key: Favicon
    parent: Front Matter
    order: 90
title: Favicon URL - Front Matter
description: How to customize the favicon on any page
date: 1111-11-11
tags:
    - front-matter
    - favicon
---
Allows to customize the favicon on any page. By default, favicon is already set into [LibDoc configuration favicon](/content/configuration/favicon.md). You can customize it on any page by entering another favicon URL into the front matter key `faviconUrl`.

```yaml
layout: libdoc_page
faviconUrl: /path-to/special-favicon.png
```
