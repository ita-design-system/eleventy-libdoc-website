---
layout: libdoc_page
permalink: primary-navigation/homepage-link/index.html
eleventyNavigation:
    key: Home page link
    parent: Primary Navigation
    order: 10
# title: LibDoc’s Front Matter 
description: Always visible, redirects to the root of the project.
date: 1111-11-11
tags:
    - navigation
---

Home page link is always visible, it redirects to the root of the project displaying the text value of the [configuration file](/content/configuration/site-title-and-description.md). 

<div class="pe-none">
    <div class="d-flex | bc-neutral-100 bwidth-1 bstyle-dashed bcolor-neutral-500 bradtl-3 brwidth-0 bbwidth-0"
        style="max-width: var(--ita-widths-sidebar);">
        <a  href="/"
            class="p-5 | td-none fvs-wght-700 lsp-5 fs-8 tws-balance | c-neutral-900"
            title="{{ libdocConfig.siteDescription }}"
            style="font-variation-settings: 'wght' 700; color: var(--ita-colors-neutral-900)">
            {{ libdocConfig.siteTitle }}
        </a>
    </div>
</div>

On small devices, the home page link is displayed as the first item into the dedicated small devices navigation bar at the bottom of the page.

<div class="pe-none">
    <nav class="d-flex | w-100 h-60px" style="max-width: 360px">
        <div class="d-flex jc-space-between | w-100 | bc-neutral-100 btwidth-1 btstyle-dashed bcolor-neutral-500">
            <a  href="/"
                class="d-flex fd-column jc-center ai-center gap-1 | pl-5 pr-2 | td-none ta-center | c-primary-900 b-0 brad-3"
                style="color: var(--ita-colors-neutral-900)">
                <span class="icon-house fs-6"></span>
                <span class="fvs-wght-400 fs-1 tt-uppercase">{{ libdocMessages.homepageShort[libdocConfig.lang] }}</span>
            </a>
            <a  href="/search/"
                class="d-flex fd-column jc-center ai-center gap-1 | pl-2 pr-2 | td-none ta-center | c-primary-900 b-0 brad-3"
                style="color: var(--ita-colors-neutral-900)">
                <span class="icon-magnifying-glass fs-6"></span>
                <span class="fvs-wght-400 fs-1 tt-uppercase">{{ libdocMessages.search[libdocConfig.lang] }}</span>
            </a>
            <button type="button"
                class="d-flex fd-column jc-center ai-center gap-1 | pl-2 pr-2 | ta-center | cur-pointer c-primary-900 bc-neutral-100 b-0 brad-3" disabled="">
                <span class="icon-list-dashes fs-6"></span>
                <span class="fvs-wght-400 fs-1 tt-uppercase">{{ libdocMessages.tableOfContentAbbr[libdocConfig.lang] }}</span>
            </button>
            <button type="button"
                class="d-flex fd-column jc-center ai-center gap-1 | pl-2 pr-2 | ta-center | cur-pointer c-primary-900 bc-neutral-100 b-0 brad-3" disabled="">
                <span class="icon-arrow-line-up fs-6"></span>
                <span class="fvs-wght-400 fs-1 tt-uppercase">{{ libdocMessages.top[libdocConfig.lang] }}</span>
            </button>
            <button type="button"
                class="d-flex fd-column jc-center ai-center gap-1 | pl-2 pr-5 | ta-center | cur-pointer c-primary-900 bc-neutral-100 b-0 brad-3">
                <span class="icon-list fs-6"></span>
                <span class="fvs-wght-400 fs-1 tt-uppercase">{{ libdocMessages.menu[libdocConfig.lang] }}</span>
            </button>
        </div>
    </nav>
</div>

