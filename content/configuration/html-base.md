---
layout: libdoc_page
permalink: configuration/html-base/index.html
eleventyNavigation:
    key: HTML base configuration
    parent: Configuration
    title: HTML Base
    order: 90
title: HTML Base - Configuration
description: Configure your path prefix
date: 1111-11-11
tags:
    - configuration
---

Eleventy LibDoc includes the [base plugin](https://www.11ty.dev/docs/plugins/html-base/). **By default, `settings.htmlBasePathPrefix` is an empty string**. If your build is not deployed to a domain root and you need to add a prefix after domain name.

If website is pushed into a sub directory of the domain name (for example on Github Pages), just add slashes before and after directory name.

```json
{
    "htmlBasePathPrefix": "/repository-name/"
}
```

