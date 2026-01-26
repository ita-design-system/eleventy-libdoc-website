---
layout: libdoc_page
permalink: primary-navigation/search-occurrences/index.html
eleventyNavigation:
    key: Search occurrences
    parent: Primary Navigation
    order: 40
# title: LibDoc’s Front Matter 
description: Easily navigate into a page clicked from a search result
date: 1111-11-11
tags:
    - navigation
---

When a search result is clicked, a UI element is displayed on the target page to help navigating between occurrences of the text query.

<div>
    <nav class="d-flex fw-wrap jc-space-between ai-center gap-5 | pos-sticky bottom-0 z-1 | p-5 | bs-1 bc-success-100 bradtl-3 bradtr-3 pe-none">
        <p class="d-flex ai-baseline gap-2 | m-0 | fs-2">
            Occurrence search
            <strong class="pt-1 pb-1 pl-3 pr-3 | fvs-500 | bc-success-900 c-success-100 brad-1">&lt;QUERY&gt;</strong>
        </p>
        <div class="d-flex gap-2">
            <button type="button" class="pos-relative | h-50px ar-square | fs-5 | brad-4 bc-neutral-100 c-success-900 bwidth-1 bstyle-dashed bcolor-success-900 cur-pointer __hover-2" onclick="libdocUi.prevSearchOccurrence()" title="Previous search occurrence">
                <span class="icon-caret-left | pos-absolute top-50 left-50 t-tY-50 t-tX-50 | c-success-900"></span>
            </button>
            <button type="button" class="pos-relative | h-50px ar-square | fs-2 | brad-4 bc-neutral-100 c-success-900 bwidth-1 bstyle-dashed bcolor-success-900 cur-pointer __hover-2" onclick="libdocUi.curSearchOccurrence()" title="Current search occurrence">
                <span class="pos-absolute top-50 left-50 t-tY-50 t-tX-50 | c-success-900">1/13</span>
            </button>
            <button type="button" class="pos-relative | h-50px ar-square | fs-5 | brad-4 bc-neutral-100 c-success-900 bwidth-1 bstyle-dashed bcolor-success-900 cur-pointer __hover-2" onclick="libdocUi.nextSearchOccurrence()" title="Next search occurrence">
                <span class="icon-caret-right | pos-absolute top-50 left-50 t-tY-50 t-tX-50 | c-success-900"></span>
            </button>
            <button type="button" class="pos-relative | h-50px ar-square | fs-2 | brad-4 bc-neutral-100 c-success-900 bwidth-1 bstyle-dashed bcolor-success-900 cur-pointer __hover-2" onclick="libdocUi.stopSearchOccurrence()" title="Stop search occurrences">
                <span class="icon-x | pos-absolute top-50 left-50 t-tY-50 t-tX-50 | c-success-900"></span>
            </button>
        </div>
    </nav>
</div>

<ul class="mt-5">
    <li class="d-flex gap-3">
        <button type="button"
            class="pos-relative | h-50px ar-square | fs-5 | brad-4 bc-neutral-100 c-success-900 bwidth-1 bstyle-dashed bcolor-success-900 cur-pointer __hover-2"
            title="{{ libdocMessages.searchOccurrencesPrevious[libdocConfig.lang] }}">
            <span class="icon-caret-left | pos-absolute top-50 left-50 t-tY-50 t-tX-50 | c-success-900"></span>
        </button>
        scrolls to the previous occurrence. If first occurrence is set, goes to the last.
    </li>
    <li class="d-flex gap-3">
        <button type="button"
            class="pos-relative | h-50px ar-square | fs-2 | brad-4 bc-neutral-100 c-success-900 bwidth-1 bstyle-dashed bcolor-success-900 cur-pointer __hover-2"
            title="{{ libdocMessages.searchOccurrencesCurrent[libdocConfig.lang] }}">
            <span class="pos-absolute top-50 left-50 t-tY-50 t-tX-50 | c-success-900">1/22</span>
        </button>
        displays the current search occurrence index. If clicked, scrolls to the current search occurrence
    </li>
    <li class="d-flex gap-3">
        <button type="button"
            class="pos-relative | h-50px ar-square | fs-5 | brad-4 bc-neutral-100 c-success-900 bwidth-1 bstyle-dashed bcolor-success-900 cur-pointer __hover-2"
            title="{{ libdocMessages.searchOccurrencesNext[libdocConfig.lang] }}">
            <span class="icon-caret-right | pos-absolute top-50 left-50 t-tY-50 t-tX-50 | c-success-900"></span>
        </button>
        scrolls to the next occurrence. If last occurrence is set, goes to the first.
    </li>
    <li class="d-flex gap-3">
        <button type="button"
            class="pos-relative | h-50px ar-square | fs-2 | brad-4 bc-neutral-100 c-success-900 bwidth-1 bstyle-dashed bcolor-success-900 cur-pointer __hover-2"
            title="{{ libdocMessages.searchOccurrencesStop[libdocConfig.lang] }}">
            <span class="icon-x | pos-absolute top-50 left-50 t-tY-50 t-tX-50 | c-success-900"></span>
        </button>
        stops the search occurrences feature.
    </li>
</ul>
