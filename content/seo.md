---
layout: libdoc_page
permalink: configuration/seo/index.html
eleventyNavigation:
    key: SEO
    order: 60
# title: LibDoc’s configuration
description: How LibDoc’s configuration and pages parameters are applied for Search Engine Optimization
date: 1111-11-11
tags:
    - configuration
    - SEO
    - front-matter
---

There are combinations of parameters used for <abbr title="Search Engine Optimization">SEO</abbr>. For each page:

## Title

`title` is propagated on the following metadata and tags

```html
<title></title>
<meta itemprop="name" content="">
<meta name="application-name" content="">
<meta name="msapplication-tooltip" content="">
<meta property="og:title" content="">
<meta name="twitter:title" content="">
<meta name="apple-mobile-web-app-title" content="">
```

Page title is displayed following these ordered priorities:

1. By default page title the Eleventy page `inputPath` if nothing is set into the front matter.
1. If `eleventyNavigation.key` is set into the front matter, page title gets this value.
1. If `title` is set into front matter, it overrides `eleventyNavigation.key` as title for the page.

## Description

`description` is propagated on the following metadata

```html
<meta name="description" itemprop="description" content="">
<meta property="og:description" content="">
<meta name="twitter:description" content="">
```

Page description is displayed following these ordered priorities:

1. By default page description is empty if nothing is set into the front matter.
1. If `description` is set into the front matter, page description gets this value.

## Open Graph Image

`og:image` is propagated on the following metadata

```html
<meta property="og:image" content="">
<meta name="twitter:image" content="">
```

Open Graph image is displayed following these ordered priorities:

1. By default Open Graph Image is the value `libdocConfig.ogImageUrl` if nothing is set into the front matter.
1. If `ogImageUrl` is set into the front matter, page Open Grapg Image gets this value.

## Favicon

`favicon` is propagated on the following metadata

```html
<link rel="icon" type="image/png" href="">
```

Favicon is displayed following these ordered priorities:

1. By default Favicon URL is the value `libdocConfig.faviconUrl` if nothing is set into the front matter.
1. If `faviconUrl` is set into the front matter, page Favicon URL gets this value.

## Author

`author` is propagated on the following metadata

```html
<meta name="author" content="">
```

Author is displayed following these ordered priorities:

1. By default author’s value is `libdocConfig.author` if nothing is set into the front matter.
1. If `author` is set into the front matter, page’s author gets this value.
