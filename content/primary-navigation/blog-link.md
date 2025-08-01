---
layout: libdoc_page
permalink: primary-navigation/blog-link/index.html
eleventyNavigation:
    key: Blog link
    parent: Primary Navigation
    order: 60
# title: LibDoc’s Front Matter 
description: How to use the blog feature of LibDoc
date: 1111-11-11
tags:
    - navigation
    - blogging
---

LibDoc has a feature dedicated to blogging. Any page created that contains a tag `post` is assigned as a blog post. 

<div class="pe-none">
    <a  href="/posts/"
        class="d-flex ai-center | pt-5 pb-5 pl-3 | fvs-wght-500 fs-4 td-none | bc-neutral-100 btwidth-1 btstyle-dashed bcolor-neutral-500 cur-pointer"
        style="max-width: var(--ita-widths-sidebar)">
        <span class="d-flex ai-center gap-2 | lsp-2">
            <span class="icon-tag-simple | fs-6 | c-primary-500"></span>
            <span style="color: var(--ita-colors-neutral-900)">My Posts</span>
        </span>
    </a>
</div>

**Blog posts link appears only if at least one page contains a `post` tag.**

Learn more about [blog feature configuration](/content/configuration/blog.md).

