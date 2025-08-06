---
layout: libdoc_page
permalink: configuration/production-url/index.html
eleventyNavigation:
    key: Production URL
    parent: Configuration
    order: 150
title: Production URL - Configuration
description: Parameter that defines the root URL of your project
tags:
    - configuration
---
This parameter allows to build proper links for various purposes on production environment. This parameter affects only feed URL for the moment, it is highly recommended to set it properly through the [settings.json configuration](/content/configuration/index.md) to make Atom feed work.

Example:

```json
{
    "productionUrl": "https://myapp.com"
}
```


