---
layout: libdoc_page
permalink: front-matter/table-of-content/index.html
eleventyNavigation:
    key: Table of content front matter
    parent: Front Matter
    title: Table of content
    order: 100
title: Table of content - Front Matter
description: Enable or disable table of content selectively
tags:
    - front-matter
    - TOC
date: git Last Modified
---
Allows to enable or disable the table of content on any page. By default, table of content display is set into [LibDoc configuration TOC](/content/configuration/toc.md). You can customize it on any page by entering `true` or `false` into the front matter key `tocEnabled`.

The following front matter forces to hide the table of content:

```yaml
layout: libdoc_page
tocEnabled: false
```

The following front matter forces to show the table of content:

```yaml
layout: libdoc_page
tocEnabled: true
```