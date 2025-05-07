---
layout: libdoc_page
permalink: configuration/custom-links/index.html
eleventyNavigation:
    key: Custom links configuration
    parent: Configuration
    title: Custom links
    order: 50
title: Custom links - Configuration
description: How to manage custom links into the primary navigation
tags:
    - configuration
    - custom-links
---

Available into `settings.json`, the `customLinks` object is an array that sets up the personal link to place into the header of the primary navigation. It looks like as follows

An example of `settings.json` with custom links:

```json
{
    "customLinks": [
        {
            "url": "https://github.com/my-github-repo",
            "text": "GitHub"
        },
        {
            "url": "https://codepen.io/myname",
            "text": "CodePen"
        },
        {
            "url": "https://linkedin.com/myprofilename",
            "text": "LinkedIn"
        }
    ]
}
```

* `url` sets the link <abbr title="Uniform Resource Locator">URL</abbr>.
* `text` sets the text of the link.