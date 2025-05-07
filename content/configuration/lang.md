---
layout: libdoc_page
permalink: configuration/language/index.html
eleventyNavigation:
    key: Language
    parent: Configuration
    order: 10
title: Language - Configuration
description: How to set up LibDoc’s internationalization texts of user interface
tags:
    - configuration
    - i18n
---

`settings.json` defines the language applied on the entire website. **Default language is english (en)**. Every <abbr title="User Interface">UI</abbr> text string of Eleventy LibDoc is stored as a key into `_data/libdocMessages.json`. This can be easily extended with more languages.

Example of `settings.json` file with french language set:

```json
{
    "lang": "fr"
}
```
