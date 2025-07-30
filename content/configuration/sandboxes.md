---
layout: libdoc_page
permalink: configuration/sandboxes/index.html
eleventyNavigation:
    key: Sandboxes configuration
    parent: Configuration
    title: Sandboxes
    order: 100
title: Sandboxes - Configuration
description: List of configuration parameters for sandboxes
date: git Last Modified
tags:
    - configuration
    - sandbox
---

By default, [sandboxes](/content/creating-content/widgets/sandboxes.md) have to be enabled to run. Eleventy LibDoc has a simple system to avoid scroll into sandbox instead of page. This feature can be disabled by setting `"sandboxRunSwitch": false` into `settings.json`.

```json
{
    "sandboxRunSwitch": false
}
```

