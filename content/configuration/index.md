---
layout: libdoc_page
permalink: configuration/index.html
eleventyNavigation:
    key: Configuration
    order: 20
title: LibDoc’s configuration
description: List and descriptions of every LibDoc parameter
date: git Last Modified
tags:
    - configuration
---

Here is the default LibDoc’s configuration. Each parameter can be overridden through the file `settings.json` at the root of the project. 

Even if `settings.json` can be empty, it is recommended to enter at least:

* `siteTitle`
* `siteDescription`
* `faviconUrl`

**If not specified in `settings.json`, the following parameters are applied:**

```json
{
    "lang": "en",
    "siteTitle": "11ty LibDoc",
    "siteDescription": "An Eleventy starter project to craft slick documentation",
    "siteLogoUrl": "",
    "siteLogoMaxHeight": 60,
    "author": false,
    "faviconUrl": "/favicon.png",
    "ogImageUrl": "https://raw.githubusercontent.com/ita-design-system/ita-medias/refs/heads/main/ogimage-11ty-libdoc.png",
    "customLinks": [],
    "blogTitle": "Blog Posts",
    "blogDescription": false,
    "blogAuthor": false,
    "blogSlug": "posts",
    "displayTagsListLink": true,
    "tocEnabled": true,
    "tocHtmlTags": ["h1", "h2", "h3", "h4", "h5", "h6"],
    "tocMinTags": 1,
    "htmlBasePathPrefix": "",
    "sandboxRunSwitch": true,
    "searchEnabled": true,
    "hljsLanguages": [
        "xml",
        "javascript",
        "json",
        "yaml",
        "liquid",
        "markdown",
        "css"
    ],
    "roundedImagesCorners": true,
    "editThisPageRootUrl": false,
    "imgBgColorLightMode": "transparent",
    "imgBgColorDarkMode": "transparent"
}
```

Parameter | Type | Description | Page override
--- |--- |--- |---
`lang`| String | Locale of the project, required for every [message](/content/configuration/lang.md) of the user interface | yes
`siteTitle` | String | [Site title](/content/configuration/site-title-and-description.md) of the project | no
`siteDescription` | String | [Site description](/content/configuration/site-title-and-description.md) of the project | no
`siteLogoUrl` | String | Optional [site logo URL](/content/configuration/site-logo.md) | no
`siteLogoMaxHeight` | Integer | If site logo URL is set, adjusts [logo maximum height](/content/configuration/site-logo.md) in pixels | no
`author` | String or <var>false</var> | Default [author](/content/configuration/author.md) of pages. Setting to <var>false</var> disables author display | yes
`faviconUrl` | String | [Favicon URL configuration](/content/configuration/favicon.md) | yes
`ogImageUrl` | String | Metadata of the default [Open Graph Image](/content/configuration/open-graph-image.md) | yes
`customLinks` | Array | Array of objects defining [custom links](/content/configuration/custom-links.md) into the primary navigation | no
`customLinks[i].text` | String | Link text | no
`customLinks[i].url` | String | Link URL | no
`blogTitle` | String | Sets the [blog title](/content/configuration/blog.md) | no
`blogDescription` | String or <var>false</var> | Sets the [blog description](/content/configuration/blog.md) | no
`blogAuthor` | String or <var>false</var> | Sets the [blog author](/content/configuration/blog.md) | no
`blogSlug` | String | Sets the [slug](/content/configuration/blog.md) for the blog  | no
`displayTagsListLink` | Boolean | Enable or disable the [link that opens tags list page](/content/configuration/tags-list-link.md) | no
`tocEnabled` | Boolean | Enable or disable [Table of Content](/content/configuration/toc.md) | yes
`tocHtmlTags` | Array | List of [tags to support into the Table of Content](/content/configuration/toc.md) | no
`tocMinTags` | Integer | [Minimum amount of headings](/content/configuration/toc.md) detected to enable Table of Content | no
`htmlBasePathPrefix` | String | Configure your [HTML base](/content/configuration/html-base.md) path prefix | no
`sandboxRunSwitch` | Boolean | Enable disable [scroll into sandbox](/content/configuration/sandboxes.md) instead of page | no
`searchEnabled` | Boolean | Enable disable [search feature](/content/primary-navigation/search-input.md) | no
`hljsLanguages` | Array | List of supported [languages for syntax highlighting](/content/configuration/hljs.md), just add aliases according to your needs | no
`roundedImagesCorners` | Boolean | Enable disable rounded image corners by default | no
`editThisPageRootUrl` | String or <var>false</var> | Sets the git root directory project’s URL to enable [edit this page link](/content/configuration/edit-this-page.md) | no
`imgBgColorLightMode` | CSS color string | Sets the [default background color](/content/configuration/default-image-background-color.md) for `<img>` tags on light mode | no
`imgBgColorDarkMode` | CSS color string | Sets the [default background color](/content/configuration/default-image-background-color.md) for `<img>` tags on dark mode | no
