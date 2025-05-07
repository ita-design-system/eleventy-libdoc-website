---
layout: libdoc_page
permalink: configuration/author/index.html
eleventyNavigation:
    key: Author configuration
    parent: Configuration
    title: Author
    order: 30
title: Author - Configuration
description: How Author’s value is propagated on page metadata
tags:
    - configuration
    - SEO
    - author
---

`author` is set to `false` by default, it means no author is displayed. To add default author on each page header, just enter text string of the default author into `settings.json`. 

<aside>
    <p class="alert alert-info">
        Note that page author can be overridden on each page. <a href="/content/front-matter/author.md">Learn more</a>
    </p>
</aside>

```json
{
    "author": "John Doe"
}
```

