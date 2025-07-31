---
layout: libdoc_page
permalink: configuration/tags-list-link/index.html
eleventyNavigation:
    key: Tags list link
    parent: Configuration
    order: 70
title: Tags list - Configuration
description: Make tags list link appear or disappear
date: 1111-11-11
tags:
    - configuration
    - tags
---

The boolean `displayTagsListLink` enables or disables the link to tags list page of the primary navigation. Tags list page contains every tag found into the entire project. 

To disable tags list link display, just enter into `settings.json`:

```json
{
    "displayTagsListLink": false
}
```

If set to `true` and pages created contain at least one tag, the tags list link appears into the primary navigation. 

If set to `false`, the tags list link does not appear even if tags are set into pages.


