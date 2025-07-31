---
layout: libdoc_page
permalink: primary-navigation/search-input/index.html
eleventyNavigation:
    key: Search input
    parent: Primary Navigation
    order: 20
# title: LibDoc’s Front Matter 
description: Fuzzy and standard search modes. Easily navigate through pages with keyboard and find exact query match.
date: 1111-11-11
tags:
    - navigation
---
The input search supports both standard search and fuzzy search:

{% alert '**Press 🆂 to focus on search input**.', 'info', 'Keyboard shortcut' %}

## Standard search

**Made for exact match**.

Allows to find the exact match of the query typed in the input field. Use <kbd>Enter</kbd> to submit a standard search.
The standard search feature allows to find any text query greater than 3 characters on every page created on the project, excepting pages with front matter `eleventyExcludeFromCollections: true` [11ty ref](https://www.11ty.dev/docs/data-configuration/). Every search query can be linked, view an example with the query ["configuration"](/search/?search=configuration).

## Fuzzy search

**Made for easy keyboard based navigation**.

Allows to quickly find any page by typing some characters even in wrong order. Fuzzy search makes easy keyboard based navigation. Use up arrow <kbd>↑</kbd>, down arrow <kbd>↓</kbd> and <kbd>Enter</kbd> to submit.

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
                placeholder="{{ libdocMessages.searchPlaceholder[libdocConfig.lang] }}"
                value="imges">
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
        <div class="bc-neutral-100 btwidth-0 bwidth-1 bstyle-dashed bcolor-neutral-500 auto-results-wrapper auto-is-active">
            <ul id="auto-searchInput-results" role="listbox" style="line-height:1em">
                <li role="option" tabindex="-1" aria-selected="true" aria-setsize="55" aria-posinset="1"
                    id="auto-selected-option-0" class="auto-selected">Images widgets <span>Ready to use HTML to highlight your
                        images </span></li>
                <li role="option" tabindex="-1" aria-selected="false" aria-setsize="55" aria-posinset="2">Open Graph Image -
                    Configuration <span>Set the image displayed when visitors share your pages configuration open-graph-image
                        SEO</span></li>
                <li role="option" tabindex="-1" aria-selected="false" aria-setsize="55" aria-posinset="3">Default image
                    background color - Configuration <span>Sets the default image background color for both light mode and dark
                        mode configuration color-schemes</span></li>
                <li role="option" tabindex="-1" aria-selected="false" aria-setsize="55" aria-posinset="4">Open Graph Image -
                    Front Matter <span>How to override default Open Graph Image and set the image displayed when visitors share
                        your pages front-matter open-graph-image SEO</span></li>
                <li role="option" tabindex="-1" aria-selected="false" aria-setsize="55" aria-posinset="5">Primary Navigation
                    <span>Detailed features of LibDoc’s primary navigation navigation</span></li>
            </ul>
        </div>
    </div>
</div>
<div style="height:350px"></div>

## Small devices

On small devices, search page and results page are merged, a search button is displayed as an item into the dedicated small devices navigation bar at the bottom of the page.

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

