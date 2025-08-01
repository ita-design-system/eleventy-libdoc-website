---
layout: libdoc_page
permalink: primary-navigation/color-schemes/index.html
eleventyNavigation:
    key: Color schemes
    parent: Primary Navigation
    order: 90
title: Color schemes - Light and dark modes
description: LibDoc’s interface in light or dark mode based on user preferences
date: 1111-11-11
tags:
    - navigation
    - color-schemes
---

From the user preferences menu - at the top of each page - user can select its own color scheme preference through these 3 options:

* **Automatic** <br>The color scheme is based on the OS color scheme preference.
* **Light** <br>Force the light color scheme.
* **Dark** <br>Force the dark color scheme.

You can try it now if you wish!

You can find the user preference button at the top of each page:

<div>
    <div class="d-inline-flex | pos-relative | p-5 | fs-4 td-none | brad-4 bc-neutral-100 bwidth-1 bstyle-dashed bcolor-neutral-500 cur-pointer __hover-1 __soft-shadow" title="Preferences">
        <span class="icon-faders | pos-absolute top-50 left-50 t-tY-50 t-tX-50"></span>
    </div>
</div>

It opens the following menu:

<div class="pe-none">
    <menu class="d-flex fd-column | w-100 mt-3 mb-0 p-4 | ls-none bc-neutral-100 brad-2 bwidth-1 bstyle-dashed bcolor-neutral-500 | __soft-shadow" style="max-width: 400px">
        <li class="d-flex fd-column gap-3 | c-neutral-900">
            <p class="m-0 | fs-3 fvs-wght-500">Color schemes</p>
            <div class="d-flex fd-column gap-3">
                <div>
                    <input type="radio" name="libdoc_color_scheme_alt" id="libdoc_color_scheme_alt__auto" class="pos-absolute opa-0" value="auto" checked="">
                    <label for="libdoc_color_scheme_alt__auto" class="d-flex ai-start gap-2">
                        <span class="d-flex fd-column gap-1">
                            <strong class="fs-2 tt-uppercase">Automatic</strong>
                            <span class="fs-2 | c-neutral-700">Based on you operating system preference</span>
                        </span>
                    </label>
                </div>
                <div>
                    <input type="radio" name="libdoc_color_scheme_alt" id="libdoc_color_scheme_alt__light" class="pos-absolute opa-0" value="light">
                    <label for="libdoc_color_scheme_alt__light" class="d-flex ai-start gap-2">
                        <span class="d-flex fd-column gap-1">
                            <strong class="fs-2 tt-uppercase">Light</strong>
                            <span class="fs-2 | c-neutral-700">Always apply light mode</span>
                        </span>
                    </label>
                </div>
                <div>
                    <input type="radio" name="libdoc_color_scheme_alt" id="libdoc_color_scheme_alt__dark" class="pos-absolute opa-0" value="dark">
                    <label for="libdoc_color_scheme_alt__dark" class="d-flex ai-start gap-2">
                        <span class="d-flex fd-column gap-1">
                            <strong class="fs-2 tt-uppercase">Dark</strong>
                            <span class="fs-2 | c-neutral-700">Always apply dark mode</span>
                        </span>
                    </label>
                </div>
            </div>
        </li>
    </menu>
</div>
