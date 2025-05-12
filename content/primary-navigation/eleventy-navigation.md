---
layout: libdoc_page
permalink: primary-navigation/eleventy-navigation/index.html
eleventyNavigation:
    key: Eleventy navigation
    parent: Primary Navigation
    order: 80
# title: LibDoc’s Front Matter 
description: How to use hierarchical menu
tags:
    - navigation
    - menu
date: git Last Modified
---

LibDoc’s pages navigation is based on [Eleventy Navigation plugin](https://www.11ty.dev/docs/plugins/navigation/). Page menu items must be set into the [front matter](/content/front-matter/index.md) of each page.

## Create an item into the menu

Here is the minimal requirement to create a menu entry. 

<div class="nav_primary pos-relative | fg-1 o-auto pe-none">
    <ol class="d-flex fd-column | m-0 pl-0 pt-3 pb-3 | ls-none bc-neutral-100 bwidth-1 bstyle-dashed bcolor-neutral-500">
        <li class="d-flex fw-wrap ai-center">
            <a href="#" class="d-flex ai-center fg-1 | pos-relative | w-100 pt-2 pb-2 pr-6 | fs-3 td-none lh-5 tws-balance fvs-wght-500 | c-neutral-900 nav_primary__anchor" style="color: var(--ita-colors-neutral-900)">First item</a>
        </li>
    </ol>
</div>

```yaml
eleventyNavigation:
    key: First item
```

## Custom link text

It is possible to customize the text of the menu item adding the key `title`. Note that the identifier of the menu item remains the same.

<div class="nav_primary pos-relative | fg-1 o-auto pe-none">
    <ol class="d-flex fd-column | m-0 pl-0 pt-3 pb-3 | ls-none bc-neutral-100 bwidth-1 bstyle-dashed bcolor-neutral-500">
        <li class="d-flex fw-wrap ai-center">
            <a href="#" class="d-flex ai-center fg-1 | pos-relative | w-100 pt-2 pb-2 pr-6 | fs-3 td-none lh-5 tws-balance fvs-wght-500 | c-neutral-900 nav_primary__anchor" style="color: var(--ita-colors-neutral-900)">The very first entry</a>
        </li>
    </ol>
</div>

```yaml
eleventyNavigation:
    key: First item
    title: The very first entry
```

## Adding an item as a child

This example adds a menu item as a child of a parent. To make an menu item as a child, add the key `parent` with the value equal to the item’s parent key value.

<div class="nav_primary pos-relative | fg-1 o-auto pe-none">
    <ol class="d-flex fd-column | m-0 pl-0 pt-3 pb-3 | ls-none bc-neutral-100 bwidth-1 bstyle-dashed bcolor-neutral-500">
        <li class="d-flex fw-wrap ai-center">
            <a href="#" class="d-flex ai-center fg-1 | pos-relative | w-100 pt-2 pb-2 pr-6 | fs-3 td-none lh-5 tws-balance fvs-wght-500 | c-neutral-900 nav_primary__anchor" style="color: var(--ita-colors-neutral-900)">The very first entry</a>
            <ol class="d-flex fd-column fg-1 order-1 | m-0 pl-5 o-hidden | ls-none">
                <li class="d-flex fw-wrap ai-center">
                    <a href="#" class="d-flex ai-center fg-1 | pos-relative | w-100 pt-2 pb-2 pr-6 | fs-3 td-none lh-5 tws-balance fvs-wght-500 | c-neutral-900 nav_primary__anchor" style="color: var(--ita-colors-neutral-900)">Sub item</a>
                </li>
            </ol>
        </li>
    </ol>
</div>

```yaml
eleventyNavigation:
    key: Sub item
    parent: First item
```

## Recursive menu tree

Eleventy Navigation menu tree structure is recursive, you can add multiple sub items.

<div class="nav_primary pos-relative | fg-1 o-auto pe-none">
    <ol class="d-flex fd-column | m-0 pl-0 pt-3 pb-3 | ls-none bc-neutral-100 bwidth-1 bstyle-dashed bcolor-neutral-500">
        <li class="d-flex fw-wrap ai-center">
            <a href="#" class="d-flex ai-center fg-1 | pos-relative | w-100 pt-2 pb-2 pr-6 | fs-3 td-none lh-5 tws-balance fvs-wght-500 | c-neutral-900 nav_primary__anchor" style="color: var(--ita-colors-neutral-900)">The very first entry</a>
            <ol class="d-flex fd-column fg-1 order-1 | m-0 pl-5 o-hidden | ls-none">
                <li class="d-flex fw-wrap ai-center">
                    <a href="#" class="d-flex ai-center fg-1 | pos-relative | w-100 pt-2 pb-2 pr-6 | fs-3 td-none lh-5 tws-balance fvs-wght-500 | c-neutral-900 nav_primary__anchor" style="color: var(--ita-colors-neutral-900)">Sub item</a>
                    <ol class="d-flex fd-column fg-1 order-1 | m-0 pl-5 o-hidden | ls-none">
                        <li class="d-flex fw-wrap ai-center">
                            <a href="#" class="d-flex ai-center fg-1 | pos-relative | w-100 pt-2 pb-2 pr-6 | fs-3 td-none lh-5 tws-balance fvs-wght-500 | c-neutral-900 nav_primary__anchor" style="color: var(--ita-colors-neutral-900)">Sub Sub item</a>
                        </li>
                    </ol>
                </li>
            </ol>
        </li>
    </ol>
</div>

```yaml
eleventyNavigation:
    key: Sub sub item
    parent: Sub item
```

## Menu order

On each tree level, menu items can be sorted by an arbitrary number called `order`. By default, consider all page order are equal to zero.

<div class="nav_primary pos-relative | fg-1 o-auto pe-none">
    <ol class="d-flex fd-column | m-0 pl-0 pt-3 pb-3 | ls-none bc-neutral-100 bwidth-1 bstyle-dashed bcolor-neutral-500">
        <li class="d-flex fw-wrap ai-center">
            <a href="#" class="d-flex ai-center fg-1 | pos-relative | w-100 pt-2 pb-2 pr-6 | fs-3 td-none lh-5 tws-balance fvs-wght-500 | c-neutral-900 nav_primary__anchor" style="color: var(--ita-colors-neutral-900)">Trees</a>
        </li>
        <li class="d-flex fw-wrap ai-center">
            <a href="#" class="d-flex ai-center fg-1 | pos-relative | w-100 pt-2 pb-2 pr-6 | fs-3 td-none lh-5 tws-balance fvs-wght-500 | c-neutral-900 nav_primary__anchor" style="color: var(--ita-colors-neutral-900)">Flowers</a>
        </li>
        <li class="d-flex fw-wrap ai-center">
            <a href="#" class="d-flex ai-center fg-1 | pos-relative | w-100 pt-2 pb-2 pr-6 | fs-3 td-none lh-5 tws-balance fvs-wght-500 | c-neutral-900 nav_primary__anchor" style="color: var(--ita-colors-neutral-900)">Mammals</a>
        </li>
    </ol>
</div>

```yaml
# Page 1 
eleventyNavigation:
    key: Trees
# Page 2
eleventyNavigation:
    key: Flowers
# Page 3
eleventyNavigation:
    key: Mammals
```

Priorizing "flowers" page with a single `order: -1`:

<div class="nav_primary pos-relative | fg-1 o-auto pe-none">
    <ol class="d-flex fd-column | m-0 pl-0 pt-3 pb-3 | ls-none bc-neutral-100 bwidth-1 bstyle-dashed bcolor-neutral-500">
        <li class="d-flex fw-wrap ai-center">
            <a href="#" class="d-flex ai-center fg-1 | pos-relative | w-100 pt-2 pb-2 pr-6 | fs-3 td-none lh-5 tws-balance fvs-wght-500 | c-neutral-900 nav_primary__anchor" style="color: var(--ita-colors-neutral-900)">Flowers</a>
        </li>
        <li class="d-flex fw-wrap ai-center">
            <a href="#" class="d-flex ai-center fg-1 | pos-relative | w-100 pt-2 pb-2 pr-6 | fs-3 td-none lh-5 tws-balance fvs-wght-500 | c-neutral-900 nav_primary__anchor" style="color: var(--ita-colors-neutral-900)">Trees</a>
        </li>
        <li class="d-flex fw-wrap ai-center">
            <a href="#" class="d-flex ai-center fg-1 | pos-relative | w-100 pt-2 pb-2 pr-6 | fs-3 td-none lh-5 tws-balance fvs-wght-500 | c-neutral-900 nav_primary__anchor" style="color: var(--ita-colors-neutral-900)">Mammals</a>
        </li>
    </ol>
</div>

```yaml
# Page 1 
eleventyNavigation:
    key: Trees
# Page 2
eleventyNavigation:
    key: Flowers
    order: -1
# Page 3
eleventyNavigation:
    key: Mammals
```

Custom order:

<div class="nav_primary pos-relative | fg-1 o-auto pe-none">
    <ol class="d-flex fd-column | m-0 pl-0 pt-3 pb-3 | ls-none bc-neutral-100 bwidth-1 bstyle-dashed bcolor-neutral-500">
        <li class="d-flex fw-wrap ai-center">
            <a href="#" class="d-flex ai-center fg-1 | pos-relative | w-100 pt-2 pb-2 pr-6 | fs-3 td-none lh-5 tws-balance fvs-wght-500 | c-neutral-900 nav_primary__anchor" style="color: var(--ita-colors-neutral-900)">Mammals</a>
        </li>
        <li class="d-flex fw-wrap ai-center">
            <a href="#" class="d-flex ai-center fg-1 | pos-relative | w-100 pt-2 pb-2 pr-6 | fs-3 td-none lh-5 tws-balance fvs-wght-500 | c-neutral-900 nav_primary__anchor" style="color: var(--ita-colors-neutral-900)">Trees</a>
        </li>
        <li class="d-flex fw-wrap ai-center">
            <a href="#" class="d-flex ai-center fg-1 | pos-relative | w-100 pt-2 pb-2 pr-6 | fs-3 td-none lh-5 tws-balance fvs-wght-500 | c-neutral-900 nav_primary__anchor" style="color: var(--ita-colors-neutral-900)">Flowers</a>
        </li>
    </ol>
</div>

```yaml
# Page 1 
eleventyNavigation:
    key: Trees
    order: 2
# Page 2
eleventyNavigation:
    key: Flowers
    order: 3
# Page 3
eleventyNavigation:
    key: Mammals
    order: 1
```
