---
layout: libdoc_page
permalink: front-matter/language/index.html
eleventyNavigation:
    key: Language
    parent: Front Matter
    order: 20
title: Language - Front Matter
description: How to override default language on any page
tags:
    - front-matter
    - language
date: git Last Modified
---
Useful when a selected page have different language than the default. Here is a front matter with a page language overridden:

```yaml
layout: libdoc_page
language: fr
```

If `language` is set, the user interface automatically switches to the language specified. Every UI interface element gets text values from the specified language that must be supported into `_data/libdocMessages.json`, otherwise, blank UI elements texts may appear.

Note that a page with the above front matter is not linked into the main/primary menu and there is no breadcrumb. To enable link item in the primary navigation, `eleventyNavigation.key` must be set into the [front matter](/content/front-matter/index.md).

[View an example](/content/front-matter/examples/language/ "You cannot find this page into main menu")

