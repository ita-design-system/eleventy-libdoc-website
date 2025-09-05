---
layout: libdoc_page
permalink: configuration/table-of-content/index.html
eleventyNavigation:
    key: Table of content configuration
    parent: Configuration
    title: TOC - Table of content
    order: 80
# title: TOC - Table of content - Configuration
description: Configuration of the TOC - Table of Content
date: 1111-11-11
tags:
    - configuration
    - toc
---

In `settings.json`, the following parameters are related to the table of content.

```json
{
    "tocEnabled": true,
    "tocHtmlTags": ["h1", "h2", "h3", "h4", "h5", "h6"],
    "tocMinTags": 1
}
```

* `tocEnabled` **default is `true`** boolean true of false, enables or disables table of content feature into the header of each page created. However, this parameter can be set on any page and then overrides the default value. For example, you can disable TOC by default and set `tocEnabled: true` on selected page’s front matter.
* `tocHtmlTags` **default is `["h1", "h2", "h3", "h4", "h5", "h6"]`** is an array of heading tags to detect as table of content items.
* `tocMinTags` **default is `1`** is an integer that sets the minimum amount of TOC HTML tags found onto the page to display the table of content.

Above settings adjust both [main and floating Tables Of Content](/content/primary-navigation/tocs.md).

