---
layout: libdoc_page
permalink: front-matter/minimal/index.html
eleventyNavigation:
    key: Minimal front matter
    parent: Front Matter
    order: 10
description: What is mandatory in a LibDoc front matter
tags:
    - front-matter
    - navigation
    - minimal
date: Last Modified
ogImageUrl: "https://cdn.jsdelivr.net/gh/ita-design-system/ita-medias@main/bricss-og-image.png"
---
Here is the minimal front matter for a page:

```yaml
layout: libdoc_page
```

Note that a page with the above front matter is not linked into the main/primary menu and there is no breadcrumb. To enable link item in the primary navigation, `eleventyNavigation.key` must be set into the [front matter](/content/front-matter/index.md). Learn more how to create ordered and hierarchical primary menu.

[View an example of a minimal page](/content/front-matter/examples/minimal/ "You cannot find this page into main menu")
