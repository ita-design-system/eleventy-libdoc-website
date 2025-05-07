---
layout: libdoc_page
permalink: front-matter/tags/index.html
eleventyNavigation:
    key: Tags
    parent: Front Matter
    order: 50
title: Tags - Front Matter
description: How to assign tags to a page
tags:
    - front-matter
    - navigation
    - tags
date: Last Modified
---
A front matter with only tags:

```yaml
layout: libdoc_page
tags:
    - tags
    - minimal
    - front-matter
```

A page with the above front matter is not linked into the main/primary menu and there is no breadcrumb. To enable link item in the primary navigation, `eleventyNavigation.key` must be set into the [front matter](/content/front-matter/index.md). It can be found in [tags list](/tags/).

[View an example of a page with only tags](/content/front-matter/examples/tags/)

