---
layout: libdoc_page
permalink: configuration/open-graph-image/index.html
eleventyNavigation:
    key: Open Graph image configuration
    parent: Configuration
    title: Open Graph image
    order: 50
title: Open Graph Image - Configuration
description: Set the image displayed when visitors share your pages
tags:
    - configuration
    - open-graph-image
    - SEO
---

Default Open Graph URL is empty. To assign a default Open Graph URL, enter it into `settings.json`:

```json
{
    "ogImageUrl": "https://<YOUR_OWN_PUBLIC_ABSOLUTE_URL>.png"
}
```

**Open Graph Image URL must be public and absolute with `https://` protocol.** 

The Open Graph Image is a metadata image URL that is displayed when a link to a LibDoc page is shared into a social network. By default, LibDoc configation `ogImageUrl` is used on every page but this parameter can be overridden on each page’s front matter with the same key `ogImageUrl`. Then you can customize each page of your project.

Recommended size is 1200 x 630 pixels.

Open Graph Image URL is applied following these ordered priorities:

1. By default Open Graph Image URL’s value is `libdocConfig.ogImageUrl` if nothing is set into the front matter.
1. If `ogImageUrl` is set into the front matter and the page is not a [blog post](/content/creating-content/blogging.md), page’s Open Graph Image URL gets this value.


Learn more about [Open Graph](https://ogp.me/).