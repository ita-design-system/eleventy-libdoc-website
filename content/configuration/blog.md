---
layout: libdoc_page
permalink: configuration/blog/index.html
eleventyNavigation:
    key: Blog configuration
    parent: Configuration
    title: Blog link
    order: 60
title: Blog - Configuration
description: How to set up blogging feature in Eleventy LibDoc
date: 1111-11-11
tags:
    - configuration
    - blogging
---

Here are the parameters related to blog.

```json
{
    "blogTitle": "My Posts",
    "blogDescription": "My own description for my blog",
    "blogAuthor": "The Blog Team",
    "blogSlug": "posts",
}
```

* `blogTitle` sets the text of the blog title.
* `blogDescription` sets the text of the blog description.
* `blogAuthor` sets a custom author for the blog.
* `blogSlug` sets a permalink prefix for every blog permalinks.

**A blog link appears when at least one page is tagged with `post`.** Learn more about [blog feature usage](/content/creating-content/blogging.md).

