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
LibDoc’s <abbr title="User Interface">UI</abbr> language can be set through text strings as keys into `_data/libdocMessages.json`. This can be easily extended with more languages. 

`settings.json` defines the language applied at build time for the UI on the entire website. 

Here is the list of available languages for the version {{ libdocUtils.version }}:

* `en` English  - default language.
* `fr` French.
* `it` Italian.

Example of `settings.json` file with french language set:

```json
{
    "lang": "fr"
}
```
