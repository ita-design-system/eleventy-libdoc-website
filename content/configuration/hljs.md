---
layout: libdoc_page
permalink: configuration/highlight-js/index.html
eleventyNavigation:
    key: Highlight JS configuration
    parent: Configuration
    title: Highlight JS
    order: 110
title: Highlight JS - Configuration
description: Configure supported languages for syntax highlighting
tags:
    - configuration
    - syntax-highlighting
---
To optimize performance, supported syntax highlighter languages are set on demand. You can adjust it to your own needs by setting the `hljsLanguages` array of [highlight.js aliases](https://highlightjs.readthedocs.io/en/latest/supported-languages.html):

Default syntax highlighting supported languages into LibDoc:

```json
{
    "hljsLanguages": [
        "xml",
        "javascript",
        "json",
        "yaml",
        "liquid",
        "markdown",
        "css"
    ]
}
```

An example of overridden settings into `settings.json`:

```json
{
    "hljsLanguages": [
        "go",
        "kotlin",
        "php",
        "python"
    ]
}
```

