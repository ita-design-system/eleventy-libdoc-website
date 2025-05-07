---
layout: libdoc_page
permalink: configuration/site-title-and-description/index.html
eleventyNavigation:
    key: Site title and description
    parent: Configuration
    order: 20
title: Site title and description - Configuration
description: How site title and site description are managed through LibDoc build
tags:
    - configuration
    - SEO
---
Just like [faviconUrl](/content/configuration/favicon.md) and [author](/content/configuration/author.md), site title and site description are important text strings to enter when project starts. Set it into `settings.json`:

```json
{
    "siteTitle": "My Documentation",
    "siteDescription": "The description of my documentation website"
}
```

* `siteTile` is always displayed as title link at the top of the primary navigation.
* `siteDescription` is displayed as metadata description on the page with `permalink: index.html` (home page) and as <var>title</var> attribute on home page link.

Site title and description are also involved in [SEO](/content/seo.md).
