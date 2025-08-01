---
layout: libdoc_page
permalink: primary-navigation/search-results/index.html
eleventyNavigation:
    key: Search results
    parent: Primary Navigation
    order: 30
# title: LibDoc’s Front Matter 
description: On a valid text query, search results page appears with excerpts of occurrences
date: 1111-11-11
tags:
    - navigation
---
<div class="pe-none">
    <div class="d-flex fd-column | pos-relative | pl-5 pr-5 | bc-neutral-100 bwidth-1 bstyle-dashed bcolor-neutral-500 btwidth-0 bbwidth-0"
        style="max-width: var(--ita-widths-sidebar)">
        <label for="dummySearchInput"
            class="pos-absolute | ml-5 t-tY-50 | fvs-wght-400 fs-1 tt-uppercase | bc-neutral-100">
            {{ libdocMessages.search[libdocConfig.lang] }}
        </label>
        <input  id="dummySearchInput"
                type="text"
                class="pl-5 pr-5 pt-4 pb-4 | fs-3 | bc-neutral-100 brad-4 bwidth-1 bstyle-dashed bcolor-neutral-500"
                value="markdown">
        <div class="d-flex ai-center | pos-absolute top-0 right-0 | h-100 mr-5">
            <button type="button"
                class="pos-relative | p-4 pr-5 | fs-3 | brad- bc-neutral-100 c-neutral-900 b-0 cur-pointer | search_form__clear_btn"
                title="{{ libdocMessages.searchClear[libdocConfig.lang] }}">
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

<ul class="pe-none">
    <li class="d-flex fd-column">
        <a href="/widgets/images/?text=markdown" class="fvs-wght-600 fs-5">
            Images widgets
        </a>
        <div class="wb-break-all fs-4" fs-3="xs">
            ready to use html to highlight your images   <mark class="fvs-wght-600 wb-break-all">markdown</mark>  images are useful for everyday use but sometime it comes you have to highlight your images.light background on images with transparencylight class name on &amp;lt;img&amp;gt; tag applies a white background o
        </div>
    </li>
    <li class="d-flex fd-column">
        <a href="/inline-html/?text=markdown" class="fvs-wght-600 fs-5">
            Inline HTML
        </a>
        <div class="wb-break-all fs-4" fs-3="xs">
            use some raw html tags into your pages  in addition of common  <mark class="fvs-wght-600 wb-break-all">markdown</mark> , it is possible to use some raw html tags.line breaki am an item sometimes it comes we need to break the line inside  <mark class="fvs-wght-600 wb-break-all">markdown</mark> i am another item sometimes it comes we need to re-break the line inside m
        </div>
    </li>
    <li class="d-flex fd-column">
        <a href="/markdown/?text=markdown" class="fvs-wght-600 fs-5">
            Markdown
        </a>
        <div class="wb-break-all fs-4" fs-3="xs">
            all available  <mark class="fvs-wght-600 wb-break-all">markdown</mark>  tags into a single page with examples  this page illustrates renders of all different  <mark class="fvs-wght-600 wb-break-all">markdown</mark>  tags. learn more about  <mark class="fvs-wght-600 wb-break-all">markdown</mark> .paragraph and carriage returnat glance: double carriage return renders a
        </div>
    </li>
</ul>
