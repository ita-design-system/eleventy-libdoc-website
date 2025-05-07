---
layout: libdoc_page
permalink: front-matter/author/index.html
eleventyNavigation:
    key: Author
    parent: Front Matter
    order: 70
title: Author - Front Matter
description: Manage the display of author into the header of each page
tags:
    - front-matter
    - navigation
    - author
date: Last Modified
---
By default rendered page display [LibDoc configuration author](/content/configuration/author.md). To override the default author, enter any string in the `author` key of the front matter. To remove the author on the page, set `false`.

The following example display a custom author name:

```yaml
layout: libdoc_page
author: John Doe
```

The following example removes author:

```yaml
layout: libdoc_page
author: false
```

A page with the above front matter is not linked into the main/primary menu and there is no breadcrumb. To enable link item in the primary navigation, `eleventyNavigation.key` must be set into the [front matter](/content/front-matter/index.md).

[View an example of a page with author disabled](/content/front-matter/examples/author-disabled/)

