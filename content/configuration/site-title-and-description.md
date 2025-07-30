---
layout: libdoc_page
permalink: configuration/site-title-and-description/index.html
eleventyNavigation:
    key: Site title and description
    parent: Configuration
    order: 20
title: Site title and description - Configuration
description: How to set site title and site description in LibDoc
date: git Last Modified
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

<aside>
    <p class="alert alert-warning" data-title="Be careful">
        Site title and site description <strong>must</strong> be pure strings, any HTML tag is discarded.
    </p>
</aside>
