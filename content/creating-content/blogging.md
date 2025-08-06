---
layout: libdoc_page
eleventyNavigation:
    key: Blogging
    parent: Creating content
    order: 40
description: How to use blog feature of Eleventy LibDoc
permalink: creating-content/blogging/index.html
tags:
    - blogging
    - atom-feed
    - date
---

To start blogging, just write at least one page with the `post` tag. **The item "My Posts" into the primary navigation is displayed when at least one page has the `post` tag**. [View blog configuration](/content/configuration/blog.md) related pages.

<aside>
    <p class="alert alert-info">The only requirement to start blogging is the <var>post</var> tag into the front matter.</p>
</aside>

## Minimal blog post front matter

```yaml
layout: libdoc_page
tags:
    - post
```

[View example](/content/creating-content/posts/minimal-post.md)

## Typical blog post front matter

Even if not mandatory, it is recommended to use the LibDoc’s configuration blog slug as URL prefix.

```yaml
layout: libdoc_page
permalink: "{% raw %}{{ libdocConfig.blogSlug }}{% endraw %}/my-simple-post/index.html"
tags:
    - post
    - blogging
title: My simple post
description: This is a simple blog post test
```

[View example](/content/creating-content/posts/simple-post.md)

## Custom Open Graph Image

The Open Graph Image is a metadata image URL that is displayed when a link to a LibDoc page is shared into a social network. By default, LibDoc configation `ogImageUrl` is used on every page but this parameter can be overridden on each page’s front matter with the same key `ogImageUrl`.

<aside>
    <p class="alert alert-warning"><strong>Open Graph Image URL must be public and absolute with <var>https://</var> protocol.</strong>.</p>
</aside>

Then you can customize each page of your project.

<aside>
    <p class="alert alert-info">If <code>ogImageUrl</code> is set properly into the front matter, this Open Graph Image URL is used as thumbnail for this blog post into the "My Posts" feed. Recommended size is 1200 x 630 pixels.</p>
</aside>

```yaml
layout: libdoc_page
permalink: "{{ libdocConfig.blogSlug }}/another-post/index.html"
tags:
    - post
    - blogging
title: My another post
description: This is another blog post test
ogImageUrl: https://images.weserv.nl/?url=https://raw.githubusercontent.com/olivier3lanc/photographies/master/assets/paysages/hiver/la_pierra_menta_de_la_roche_parstire_alpha_size_3000x1600.webp&w=1200&h=630&fit=cover&q=30&output=webp
```

[View example](/content/creating-content/posts/another-post.md) or learn more about [OG configuration](/content/configuration/open-graph-image.md)

## Custom date

Eleventy LibDoc uses built-in [11ty content dates](https://www.11ty.dev/docs/dates/). By default, the last modified date is applied. But this setting may display unwanted results such as build date. It is recommended to set `gitLastModified: true` or your own custom date e.g. `date: 2016-01-01`.

```yaml
# Custom date
date: 2016-01-01
```

## Custom author

It is possible to override the page’s author display. Just add `author` key into the [front matter](/content/front-matter/index.md) with your own string value as author’s name.

```yaml
author: John Doe
```

## Atom Feed

**The Atom feed is a single XML file URL populated only with blog posts that allows visitors to be kept informed about new publications of the blog part**.

Once [production URL](/content/configuration/production-url.md) configuration setting is properly set, an [Atom feed](https://en.wikipedia.org/wiki/Atom_(web_standard)) is automatically built on the URL `<productionURL>/feed.xml`. 

As an example, here is the LibDoc’s Atom feed <{{ libdocConfig.productionUrl }}/feed.xml>
