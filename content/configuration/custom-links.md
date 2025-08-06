---
layout: libdoc_page
permalink: configuration/custom-links/index.html
eleventyNavigation:
    key: Custom links configuration
    parent: Configuration
    title: Custom links
    order: 50
title: Custom links - Configuration
description: How to manage custom links into the primary navigation
date: 1111-11-11
tags:
    - configuration
    - custom-links
---
Available into `settings.json`, the `customLinks` object is an array that sets up personal links to place into the header of the primary navigation. Custom links menu progressively collapse: If links gets wider than their container, overflowed links are grouped into a sub menu.

<div>
    <p class="d-inline-flex ai-center rgap-1 | pos-relative pt-3 pb-3 pl-5 o-auto | bc-neutral-100 bwidth-1 bstyle-dashed bcolor-neutral-500 pe-none">
        <a href="#" class="
        d-flex ai-center gap-1
        pt-2 pb-2 pr-5
        fvs-wght-700 fs-2 lsp-3 lh-1 tt-uppercase td-none ws-nowrap
        c-primary-600"><strong>Atom feed</strong></a>
        <a href="#" class="
        d-flex ai-center gap-1
        pt-2 pb-2 pr-5
        fvs-wght-700 fs-2 lsp-3 lh-1 tt-uppercase td-none ws-nowrap
        c-primary-600"><strong>GitHub</strong></a>
        <a href="#" class="
        d-flex ai-center gap-1
        pt-2 pb-2 pr-5
        fvs-wght-700 fs-2 lsp-3 lh-1 tt-uppercase td-none ws-nowrap
        c-primary-600"><strong>CodePen</strong></a>
        <a href="#" class="
        d-flex ai-center gap-1
        pt-2 pb-2 pr-5
        fvs-wght-700 fs-2 lsp-3 lh-1 tt-uppercase td-none ws-nowrap
        c-primary-600"><strong>LinkedIn</strong></a>
    </p>
</div>

An example of `settings.json` with custom links:

```json
{
    "customLinks": [
        {
            "url": "/feed.xml",
            "text": "Atom feed"
        },
        {
            "url": "https://github.com/my-github-repo",
            "text": "GitHub"
        },
        {
            "url": "https://codepen.io/myname",
            "text": "CodePen"
        },
        {
            "url": "https://linkedin.com/myprofilename",
            "text": "LinkedIn"
        }
    ]
}
```

* `url` sets the link <abbr title="Uniform Resource Locator">URL</abbr>.
* `text` sets the text of the link.