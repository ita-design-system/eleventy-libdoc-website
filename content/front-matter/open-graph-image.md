---
layout: libdoc_page
permalink: front-matter/open-graph-image/index.html
eleventyNavigation:
    key: Open Graph Image
    parent: Front Matter
    order: 100
title: Open Graph Image - Front Matter
description: How to override default Open Graph Image on any page
tags:
    - front-matter
    - open-graph-image
date: Last Modified
ogImageUrl: https://images.weserv.nl/?url=https://raw.githubusercontent.com/olivier3lanc/photographies/master/paysages/hiver/foret_sapins_hiver_col_pre_img_4917_size_2560x1706.webp&w=1200&h=600&fit=cover&q=30&output=webp
---
Allows to customize Open Graph metadata on any page. By default, [LibDoc configuration metadata](/content/configuration/open-graph-image.md) is set as Open Graph Image. You can customize it on any page by entering another image URL into the front matter key `ogImageUrl`.

**Open Graph Image URL must be public and absolute with `https://` protocol.**

Learn more about [Open Graph](https://ogp.me/).

```yaml
layout: libdoc_page
ogImageUrl: https://domain.com/path-to/custom-open-graph-url.jpg
```
