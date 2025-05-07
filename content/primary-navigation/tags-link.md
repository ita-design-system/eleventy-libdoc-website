---
layout: libdoc_page
permalink: primary-navigation/tags-link/index.html
eleventyNavigation:
    key: Tags list link
    parent: Primary Navigation
    order: 70
# title: LibDoc’s Front Matter 
description: How to use the tags list page of LibDoc
tags:
    - navigation
    - tags
date: Last Modified
---

Every LibDoc page can contain tags. All these tags are listed into a special page of Eleventy LibDoc called *tags list*. **Tags list link appears only if at least one tag - excepting `post` tag - is found on pages.**

<div class="pe-none">
    <a  href="/tags/"
        class="d-flex ai-center | pt-5 pb-5 pl-3 | fvs-wght-500 fs-4 td-none | bc-neutral-100 btwidth-1 btstyle-dashed bcolor-neutral-500 cur-pointer"
        style="max-width: var(--ita-widths-sidebar)">
        <span class="d-flex ai-center gap-2 | lsp-2">
            <span class="icon-tag-simple | fs-6 | c-primary-500"></span>
            <span style="color: var(--ita-colors-neutral-900)">Tags list</span>
        </span>
    </a>
</div>

Learn more about [tags list link configuration](/content/configuration/tags-list-link.md).

