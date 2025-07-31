---
layout: libdoc_page
permalink: configuration/site-logo/index.html
eleventyNavigation:
    key: Site Logo
    parent: Configuration
    order: 25
title: Site Logo - Configuration
description: Optionally replace text link by logo image
tags:
    - configuration
    - logo
---
Home link in primary navigation is the site title by default, but it can be a logo. To set your own logo, enter its relative or absolute URL into `settings.json`. Maximum logo width is limited to primary navigation bounds. If needed, logo size is available via `siteLogoMaxHeight` parameter.

```json
{
    "siteLogoUrl": "/assets/path/to/logo.svg",
    "siteLogoMaxHeight": 100
}
```

* `siteLogoUrl` **Empty string by default**. If set, must be a source image input path or an absolute URL of the source image. It replaces the text link by an image link. Just like any other image on the project, the image file is processed by [11ty Image Plugin](https://www.11ty.dev/docs/plugins/image/).
* `siteLogoMaxHeight` **Default is 60**. An integer that represent an amount of pixels in height. Applies only if `siteLogoUrl` is set. Allows to quickly adjust logo size. 