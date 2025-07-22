---
layout: libdoc_page
permalink: primary-navigation/index.html
eleventyNavigation:
    key: Primary Navigation
    order: 50
# title: LibDoc’s Front Matter 
description: Detailed features of LibDoc’s primary navigation
tags:
    - navigation
date: git Last Modified
---

The primary navigation is one of the most important element of the user interface. It contains six parts:

1. [The home page link](/content/primary-navigation/home-link.md)<br>
    <div class="pt-5 pb-5 | pe-none">
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
1. [The search input](/content/primary-navigation/search-input.md)
    <div class="pt-5 pb-5 | pe-none">
        <div class="d-flex fd-column | pos-relative | pl-5 pr-5 | bc-neutral-100 bwidth-1 bstyle-dashed bcolor-neutral-500 btwidth-0 bbwidth-0"
            style="max-width: var(--ita-widths-sidebar)">
            <label for="dummySearchInput"
                class="pos-absolute | ml-5 t-tY-50 | fvs-wght-400 fs-1 tt-uppercase | bc-neutral-100">
                {{ libdocMessages.search[libdocConfig.lang] }}
            </label>
            <input  id="dummySearchInput"
                    type="text"
                    class="pl-5 pr-5 pt-4 pb-4 | fs-3 | bc-neutral-100 brad-4 bwidth-1 bstyle-dashed bcolor-neutral-500"
                    placeholder="{{ libdocMessages.searchPlaceholder[libdocConfig.lang] }}"
                    value="">
            <div class="d-flex ai-center | pos-absolute top-0 right-0 | h-100 mr-5">
                <button type="button"
                    class="pos-relative | p-4 pr-5 | fs-3 | brad- bc-neutral-100 c-neutral-900 b-0 cur-pointer | search_form__clear_btn"
                    title="{{ libdocMessages.searchClear[libdocConfig.lang] }}"
                    hidden>
                    <span class="icon-x | pos-absolute top-50 left-50 t-tY-50 t-tX-50"></span>
                </button>
                <button type="submit"
                    class="pos-relative | h-100 p-0 ar-square | fs-5 | brad-4 bc-primary-500 c-neutral-100 bwidth-1 bstyle-dashed bcolor-neutral-100 cur-pointer"
                    title="{{ libdocMessages.searchSubmit[libdocConfig.lang] }}">
                    <span class="icon-magnifying-glass | pos-absolute top-50 left-50 t-tY-50 t-tX-50"></span>
                </button>
            </div>
        </div>
    </div>
1. [Custom links](/content/primary-navigation/custom-links.md)<br>
    <div class="pos-relative | pt-5 pb-5 | pe-none">
        <nav class="d-flex ai-center fw-wrap | pb-3 pt-3 | bc-neutral-100 bwidth-1 bstyle-dashed bcolor-neutral-500 btwidth-0 bbwidth-0"
            style="max-width: var(--ita-widths-sidebar)">
            <a href="#"
                style="width:33.33%"
                class="
                d-flex jc-center ai-center gap-1
                pt-2 pb-2
                fvs-wght-600 fs-2 lsp-3 lh-1 tt-uppercase td-none
                c-primary-600" target="_blank">
                GitHub
                <span class=""><span class="icon-arrow-square-out | pos-absolute t-tY-50 | c-primary-300"></span></span>
            </a>
            <a href="#"
                style="width:33.33%"
                class="
                d-flex jc-center ai-center gap-1
                pt-2 pb-2
                fvs-wght-600 fs-2 lsp-3 lh-1 tt-uppercase td-none
                c-primary-600" target="_blank">
                CodePen
                <span class=""><span class="icon-arrow-square-out | pos-absolute t-tY-50 | c-primary-300"></span></span>
            </a>
            <a href="#"
                style="width:33.33%"
                class="
                d-flex jc-center ai-center gap-1
                pt-2 pb-2
                fvs-wght-600 fs-2 lsp-3 lh-1 tt-uppercase td-none
                c-primary-600" target="_blank">
                LinkedIn
                <span class=""><span class="icon-arrow-square-out | pos-absolute t-tY-50 | c-primary-300"></span></span>
            </a>
        </nav>
    </div>
1. [The blog link](/content/primary-navigation/blog-link.md)<br>
    <div class="pt-5 pb-5 | pe-none">
        <a  href="/posts/"
            class="d-flex ai-center | pt-5 pb-5 pl-3 | fvs-wght-500 fs-4 td-none | bc-neutral-100 btwidth-1 btstyle-dashed bcolor-neutral-500 cur-pointer"
            style="max-width: var(--ita-widths-sidebar)">
            <span class="d-flex ai-center gap-2 | lsp-2">
                <span class="icon-tag-simple | fs-6 | c-primary-500"></span>
                <span style="color: var(--ita-colors-neutral-900)">My Posts</span>
            </span>
        </a>
    </div>
1. [The tags list link](/content/primary-navigation/tags-link.md)<br>
    <div class="pt-5 pb-5 | pe-none">
        <a  href="/tags/"
            class="d-flex ai-center | pt-5 pb-5 pl-3 | fvs-wght-500 fs-4 td-none | bc-neutral-100 btwidth-1 btstyle-dashed bcolor-neutral-500 cur-pointer"
            style="max-width: var(--ita-widths-sidebar)">
            <span class="d-flex ai-center gap-2 | lsp-2">
                <span class="icon-tag-simple | fs-6 | c-primary-500"></span>
                <span style="color: var(--ita-colors-neutral-900)">Tags list</span>
            </span>
        </a>
    </div>
1. [The Eleventy Navigation](/content/primary-navigation/eleventy-navigation.md)
1. [Color schemes](/content/primary-navigation/color-schemes.md)