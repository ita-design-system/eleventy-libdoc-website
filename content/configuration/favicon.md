---
layout: libdoc_page
permalink: configuration/favicon/index.html
eleventyNavigation:
    key: Favicon configuration
    parent: Configuration
    title: Favicon
    order: 40
title: Favicon URL - Configuration
description: How to manage Favicon URL
date: git Last Modified
tags:
    - configuration
    - favicon
---

It is possible to override default favicon by entering a root relative URL or absolute URL to it. Available into `settings.json`:

```json
{
    "faviconUrl": "/my/own/path/favicon.png"
}
```

Favicon URL is applied following these ordered priorities:

1. By default favicon URL’s value is `settings.faviconUrl` if nothing is set into the front matter.
1. If `faviconUrl` is set into the front matter, page’s favicon URL gets this value.

Learn more about [favicon on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Favicon)
