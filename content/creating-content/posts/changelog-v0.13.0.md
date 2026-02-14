---
layout: libdoc_page
permalink: "{{ libdocConfig.blogSlug }}/{{ page.fileSlug }}/index.html"
tags:
    - post
    - changelog
title: Change log LibDoc v0.13.0
description: Custom Open Graph on tag pages
date: 2026-02-14
# ogImageUrl: "https://raw.githubusercontent.com/ita-design-system/ita-medias/refs/heads/main/libdoc-v0.11.0.avif"
---
[Release v0.13.0 on Github](https://github.com/ita-design-system/eleventy-libdoc/releases/tag/0.13.0)

It is possible to set a custom Open Graph Image URL to any tag. For example, assuming you have a tag called `foo`, then you have an URL `/tags/foo`, assigning an Open Graph image URL to this page can be set like follows through your `settings.json`:

```json
{
    "ogImageUrlForEachTag": {
        "foo": "https://example.com/path/to/custom-open-graph-image.avif"
    }
}
```

For example on current website, you can view an example of a custom Open Graph Image for tag page [change log](/tags/changelog) on this website. Here are the involved lines from the `settings.json` file:

```json
{
    "ogImageUrlForEachTag": {
        "changelog": "https://og-image.vercel.app/**11ty%20LibDoc%20Change%20Log**.png?theme=dark&md=1&fontFamily=source-sans-pro&fontSize=100px"
    }
}