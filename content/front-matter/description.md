---
layout: libdoc_page
permalink: front-matter/description/index.html
eleventyNavigation:
    key: Description
    parent: Front Matter
    order: 40
description: How to add a description to any page
tags:
    - front-matter
    - navigation
date: git Last Modified
---
A front matter with a custom description for a page:

```yaml
layout: libdoc_page
description: Just added a description to front matter
```

A page with the above front matter is not linked into the main/primary menu and there is no breadcrumb. To enable link item in the primary navigation, `eleventyNavigation.key` must be set into the [front matter](/content/front-matter/index.md).

[View an example of a page with description](/content/front-matter/examples/description/ "You cannot find this page into main menu")

