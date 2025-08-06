---
layout: libdoc_page
permalink: primary-navigation/custom-links/index.html
eleventyNavigation:
    key: Custom links
    parent: Primary Navigation
    order: 50
# title: LibDoc’s Front Matter 
description: Display important links that visitors may need to see on each page you create
date: 1111-11-11
tags:
    - navigation
---

LibDoc allows to display personal and/or important links into the primary navigation. It can be set into [custom links configuration](/content/configuration/custom-links.md). If links gets wider than their container, overflowed links are grouped into a sub menu.

Example:

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

<figure>
    <img src="https://raw.githubusercontent.com/ita-design-system/ita-medias/refs/heads/main/libdoc-v0.10.0.avif"
        alt="LibDoc 0.10.0 release image">
    <figcaption>Progressive collapse of custom links.</figcaption>
</figure>