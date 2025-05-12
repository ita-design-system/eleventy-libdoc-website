---
layout: libdoc_page
permalink: front-matter/date/index.html
eleventyNavigation:
    key: Date
    parent: Front Matter
    order: 60
title: Date - Front Matter
description: How to manage date string into the page header
tags:
    - front-matter
    - date
date: git Last Modified
---

## Remove date display

Just set `date: false`. Here is A front matter with date disabled:

```yaml
date: false
```

[Example with date removed](/content/front-matter/examples/date-disabled.md)

## Custom date

Enter Eleventy support date <https://www.11ty.dev/docs/dates/>, for example:

```yaml
date: 2016-01-01
```

[Example with custom date](/content/front-matter/examples/date-custom.md)

