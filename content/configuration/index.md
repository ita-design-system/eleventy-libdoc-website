---
layout: libdoc_page
permalink: configuration/index.html
eleventyNavigation:
    key: Configuration
    order: 20
title: LibDoc’s configuration
description: List and descriptions of every LibDoc parameter
tags:
    - configuration
---

Here is the default LibDoc’s configuration. Each parameter can be overridden through the file `settings.json` at the root of the project. 

Even if `settings.json` can be empty, it is recommended to enter at least:

* `siteTitle`
* `siteDescription`
* `faviconUrl`

If not specified in `settings.json`, the following parameters are applied:

```json
{
    "lang": "en",
    "siteTitle": "Eleventy LibDoc",
    "siteDescription": "An Eleventy starter project to craft slick documentation",
    "siteLogoUrl": "",
    "siteLogoMaxHeight": 60,
    "author": false,
    "faviconUrl": "/favicon.png",
    "ogImageUrl": "https://raw.githubusercontent.com/ita-design-system/ita-medias/refs/heads/main/ogimage-11ty-libdoc.png",
    "customLinks": [],
    "blogTitle": "My Posts",
    "blogDescription": "My own description for my blog",
    "blogAuthor": "The Blog Team",
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
    "roundedImagesCorners": true
}
```

Parameter | Type | Description | Page override
--- |--- |--- |---
`lang`| String | Locale of the project, required for every message of the user interface [Learn more](/content/configuration/lang.md) | yes
`siteTitle` | String | Title of the project [Learn more](/content/configuration/site-title-and-description.md) | no
`siteDescription` | String | Description of the project [Learn more](/content/configuration/site-title-and-description.md) | no
`siteLogoUrl` | String | Optional site logo URL [Learn more](/content/configuration/site-logo.md) | no
`siteLogoMaxHeight` | Integer | If site logo URL is set, adjusts maximum height of the logo in pixels [Learn more](/content/configuration/site-logo.md) | no
`author` | String or Boolean | Default author of pages. Setting to <var>false</var> disables author display [Learn more](/content/configuration/author.md) | yes
`faviconUrl` | String | URL of the favicon [Learn more](/content/configuration/favicon.md) | yes
`ogImageUrl` | String | Metadata URL of the default Open Graph image [Learn more](/content/configuration/open-graph-image.md) | yes
`customLinks` | Array | Array of objects defining custom links into the primary navigation [Learn more](/content/configuration/custom-links.md) | no
`customLinks[i].text` | String | Link text [Learn more](/content/configuration/custom-links.md) | no
`customLinks[i].url` | String | Link URL [Learn more](/content/configuration/custom-links.md) | no
`blogTitle` | String | Sets the blog title [Learn more](/content/configuration/blog.md) | no
`blogDescription` | String | Sets the blog description [Learn more](/content/configuration/blog.md) | no
`blogAuthor` | String | Sets the blog author [Learn more](/content/configuration/blog.md) | no
`blogSlug` | String | Sets the slug for the blog [Learn more](/content/configuration/blog.md) | no
`displayTagsListLink` | Boolean | Enable or disable the link that opens tags list page [Learn more](/content/configuration/tags-list-link.md) | no
`tocEnabled` | Boolean | Enable or disable Table of Content [Learn more](/content/configuration/toc.md) | yes
`tocHtmlTags` | Array | List of tags to support into the Table of Content [Learn more](/content/configuration/toc.md) | no
`tocMinTags` | Integer | Minimum amount of headings detected to enable Table of Content [Learn more](/content/configuration/toc.md) | no
`htmlBasePathPrefix` | String | Configure your HTML base path prefix [Learn more](/content/configuration/html-base.md) | no
`sandboxRunSwitch` | Boolean | Enable disable scroll into sandbox instead of page [Learn more](/content/configuration/sandboxes.md) | no
`searchEnabled` | Boolean | Enable disable search feature | no
`hljsLanguages` | Array | List of supported languages for syntax highlighting, just add aliases according to your needs [Learn more](/content/configuration/hljs.md) | no
`roundedImagesCorners` | Boolean | Enable disable rounded image corners by default | no
