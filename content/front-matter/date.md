---
layout: libdoc_page
permalink: front-matter/date/index.html
eleventyNavigation:
    key: Date
    parent: Front Matter
    order: 60
title: Date - Front Matter
description: How to manage date string into the page header
date: 1111-11-11
tags:
    - front-matter
    - date
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

## git Last Modified date

It may occurs that Eleventy date setting `date: git Last Modified` fails on production builds. To force the display of the truly git Last Modified date, just set `date: 1111-11-11`. This special date value forces the display of the truly git Last Modified date by seeking through git history. Thus, it may increases significantly build duration proportionally with the amount of pages this parameter is set.

This following page front matter date will seek file git history to display the truly git Last Modified date.

```yaml
date: 1111-11-11
```

{% alert 'Depending on the amount of front matter *date: 1111-11-11*, the build duration may increase significantly. It is recommended to use this function sparingly.', 'warning', 'Build cost +++' %}
