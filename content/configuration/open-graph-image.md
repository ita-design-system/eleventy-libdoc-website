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
date: 1111-11-11
tags:
    - configuration
    - open-graph-image
    - SEO
---

Default Open Graph URL is the [LibDoc’s Open Graph image](https://raw.githubusercontent.com/ita-design-system/ita-medias/refs/heads/main/ogimage-11ty-libdoc.png). To assign your own default Open Graph URL, enter it into `settings.json`:

```json
{
    "ogImageUrl": "https://<YOUR_OWN_PUBLIC_ABSOLUTE_URL>.jpg"
}
```

The Open Graph Image is a metadata image URL that is displayed when a link to a LibDoc page is shared into a social network. By default, LibDoc configuration `ogImageUrl` is used on every page but this parameter can be overridden on each page’s front matter with the same key `ogImageUrl`. Then you can customize each page of your project.

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
    <p class="alert alert-info" data-title="Local issues">
        Since the Open Graph Image URL must be set before site is deployed, the image may not be available on local development environment. A solution to this issue is to place custom Open Graph Images on another server.
    </p>
</aside>

<aside>
    <p class="alert alert-info" data-title="Recommended size">
        Recommended size for an Open Graph Image is 1200 x 630 pixels.
    </p>
</aside>

Open Graph Image URL is applied following these ordered priorities:

1. By default Open Graph Image URL’s value is `libdocConfig.ogImageUrl` if nothing is set into the front matter.
1. If `ogImageUrl` is set into the front matter and the page is not a [blog post](/content/creating-content/blogging.md), page’s Open Graph Image URL gets this value.


Learn more about [Open Graph](https://ogp.me/).

## Tag pages

It is possible to set a custom Open Graph Image URL to any tag. For example, assuming you have a tag called `foo`, then you have an URL `/tags/foo`, assigning an Open Graph image URL to this page can be set like follows through your `settings.json`:

```json
{
    "ogImageUrlForEachTag": {
        "foo": "https://example.com/path/to/custom-open-graph-image.avif"
    }
}
```


For example on current website, you can view an example of a custom Open Graph Image for tag page [change log](/tags/changelog) on this website. Here are the involved lines from the `settings.json` file:

```json
{
    "ogImageUrlForEachTag": {
        "changelog": "https://og-image.vercel.app/**11ty%20LibDoc%20Change%20Log**.png?theme=dark&md=1&fontFamily=source-sans-pro&fontSize=100px"
    }
}