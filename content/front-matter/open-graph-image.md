---
layout: libdoc_page
permalink: front-matter/open-graph-image/index.html
eleventyNavigation:
    key: Open Graph Image
    parent: Front Matter
    order: 100
title: Open Graph Image - Front Matter
description: How to override default Open Graph Image and set the image displayed when visitors share your pages
date: 1111-11-11
tags:
    - front-matter
    - open-graph-image
    - SEO
ogImageUrl: https://images.weserv.nl/?url=https://raw.githubusercontent.com/olivier3lanc/photographies/master/assets/paysages/hiver/foret_sapins_hiver_col_pre_img_4917_size_2560x1706.webp&w=1200&h=600&fit=cover&q=30&output=webp
---
Allows to customize Open Graph metadata on any page. By default, [LibDoc configuration metadata](/content/configuration/open-graph-image.md) is set as Open Graph Image. You can customize it on any page by entering another image URL into the front matter key `ogImageUrl`.

<aside>
    <p class="alert alert-warning" data-title="Warning">
        Open Graph Image URL <strong>must be public and absolute</strong> with <var>https://</var> protocol.
    </p>
</aside>

<aside>
    <p class="alert alert-warning" data-title="No Eleventy Image">
        For technical reasons, the Open Graph URL <strong>must</strong> be an image ready to be displayed and not a source image to be transcoded by Eleventy Image plugin.
    </p>
</aside>

<aside>
    <p class="alert alert-info" data-title="Recommended size">
        Recommended size for an Open Graph Image is 1200 x 630 pixels.
    </p>
</aside>

Example with a custom Open Graph Image already placed into the `/assets` directory: 

```yaml
ogImageUrl: https://myprojectdomain.com/assets/custom-open-graph-url.jpg
```

<aside>
    <p class="alert alert-info" data-title="Local issues">
        Since the Open Graph Image URL must be set before site is deployed, the image may not be available on local development environment. A solution to this issue is to place custom Open Graph Images on another server.
    </p>
</aside>

Learn more about [Open Graph](https://ogp.me/).
