---
layout: libdoc_page
permalink: front-matter/title/index.html
eleventyNavigation:
    key: Title
    parent: Front Matter
    order: 30
title: Title - Front Matter
description: How to just add a title to a page
tags:
    - front-matter
    - navigation
date: Last Modified
---

Page title is displayed following these ordered priorities:

1. By default page title the Eleventy page `inputPath` if nothing is set into the front matter.
1. If `eleventyNavigation.key` is set into the front matter, page title gets this value.
1. If `title` is set into front matter, it overrides `eleventyNavigation.key` as title for the page.

## No title case

With the following example, input path is used as title.

```yaml
layout: libdoc_page
```

[View example](/content/front-matter/examples/minimal.md)

## Title case without primary navigation

Into the following example, a title is set into the page header but the page is not linked into the primary navigation.

```yaml
layout: libdoc_page
title: Just added title to front matter
```

[View example](/content/front-matter/examples/title.md)

## Title case with primary navigation

Into the following case, the title of the page is the value of `eleventyNavigation.key`

```yaml
layout: libdoc_page
eleventyNavigation:
    key: A title with an item into the primary navigation
```

## Title case with primary navigation and override

Into the following case, the title of the page is the value of `title` overriding `eleventyNavigation.key`. Into the primary navigation, link text remains <q>Title key</q>.

```yaml
layout: libdoc_page
eleventyNavigation:
    key: Title key
title: A title with an item into the primary navigation
```