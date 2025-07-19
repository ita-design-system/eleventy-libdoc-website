---
layout: libdoc_page
permalink: configuration/default-image-background-color/index.html
eleventyNavigation:
    key: Default image background color
    parent: Configuration
    order: 130
title: Default image background color - Configuration
description: Sets the default image background color for both light mode and dark mode
tags:
    - configuration
    - color-scheme
---
Using transparent images may display bad contrasts between page background color and image colors. It it possible to set the default background color for both light mode and dark mode color schemes. Just set the following parameters into your `settings.json` file.

Default colors are transparent but it can be any valid CSS color:

```json
{
    "imgBgColorLightMode": "#FFF",
    "imgBgColorDarkMode": "black"
}
```

