---
layout: libdoc_page.liquid
eleventyNavigation:
    key: Icon cards
    parent: Widgets
    order: 65
description: Easily highlight something important in a simple way with an icon, a main text and its description
permalink: creating-content/widgets/icon-cards/index.html
tags:
    - icons
    - shortcodes
---
Just use `iconCard` shortcode as follows:

```liquid
{% raw %}{% iconCard '<MAIN_TEXT>', '<DESCRIPTION>', '<ICON_NAME>' %}{% endraw %}
```

* `<MAIN_TEXT>` and `<DESCRIPTION>` are mandatory, must be a string with the content to display, can be **markdown** or **HTML**.
* `<ICON_NAME>` is optional. It allows to display a title at the top of the alert.

Examples:

{% iconCard 'Icon cards', 'Easily highlight something important in a simple way with an icon, a main text and its description.', 'code' %}
{% iconCard 'Default icon name', 'If none or invalid icon name is set, default icon is applied.' %}

```liquid
{% raw %}{% iconCard 'Icon cards', 'Easily highlight something important in a simple way with an icon, a main text and its description.', 'code' %}
{% iconCard 'Default icon name', 'If none or invalid icon name is set, default icon is applied.' %}{% endraw %}
```

Icon cards can be included into unordered and ordered lists:

* {% iconCard 'Accessibility', 'LibDoc was developed with accessibility awareness.', 'person-arms-spread' %}
* {% iconCard 'Content focused', 'LibDoc is easy to install, use and deploy.', 'pen' %}
* {% iconCard 'Performance', 'Low front-end dependencies and vanilla JS self-made components make LibDoc cross-browser compatibility and good performances. <a href="https://developers.google.com/speed/pagespeed/insights/?url=eleventy-libdoc.netlify.app" target="_blank">View performances</a>', 'rocket' %}
* {% iconCard 'Fallback if no Javascript available', 'LibDoc can work even without Javascript with reduced features.', 'parachute' %}
* {% iconCard 'Image transcoding', 'LibDoc transcodes and resizes your source images into production ready formats.', 'images' %}
* {% iconCard 'Printable', 'Every page created with LibDoc can be printed. Try to print preview this page in PDF!<br><button type="button" class="btn mt-2" onclick="print()">print preview</button>', 'printer' %}
* {% iconCard 'Slick code highlighting', 'Display your code in a nice style and adjust which code languages you really use.', 'code' %}
* {% iconCard 'Sandboxes', 'Showcase small demos or full HTML pages into a responsive dual pane.', 'sidebar' %}

---

1. {% iconCard 'Accessibility', 'LibDoc was developed with accessibility awareness.', 'person-arms-spread' %}
1. {% iconCard 'Content focused', 'LibDoc is easy to install, use and deploy.', 'pen' %}
1. {% iconCard 'Performance', 'Low front-end dependencies and vanilla JS self-made components make LibDoc cross-browser compatibility and good performances. <a href="https://developers.google.com/speed/pagespeed/insights/?url=eleventy-libdoc.netlify.app" target="_blank">View performances</a>', 'rocket' %}
1. {% iconCard 'Fallback if no Javascript available', 'LibDoc can work even without Javascript with reduced features.', 'parachute' %}
1. {% iconCard 'Image transcoding', 'LibDoc transcodes and resizes your source images into production ready formats.', 'images' %}
1. {% iconCard 'Printable', 'Every page created with LibDoc can be printed. Try to print preview this page in PDF!<br><button type="button" class="btn mt-2" onclick="print()">print preview</button>', 'printer' %}
1. {% iconCard 'Slick code highlighting', 'Display your code in a nice style and adjust which code languages you really use.', 'code' %}
1. {% iconCard 'Sandboxes', 'Showcase small demos or full HTML pages into a responsive dual pane.', 'sidebar' %}

```markdown
{% raw %}* {% iconCard 'Accessibility', 'LibDoc was developed with accessibility awareness.', 'person-arms-spread' %}
* {% iconCard 'Content focused', 'LibDoc is easy to install, use and deploy.', 'pen' %}
* {% iconCard 'Performance', 'Low front-end dependencies and vanilla JS self-made components make LibDoc cross-browser compatibility and good performances. <a href="https://developers.google.com/speed/pagespeed/insights/?url=eleventy-libdoc.netlify.app" target="_blank">View performances</a>', 'rocket' %}
* {% iconCard 'Fallback if no Javascript available', 'LibDoc can work even without Javascript with reduced features.', 'parachute' %}
* {% iconCard 'Image transcoding', 'LibDoc transcodes and resizes your source images into production ready formats.', 'images' %}
* {% iconCard 'Printable', 'Every page created with LibDoc can be printed. Try to print preview this page in PDF!<br><button type="button" class="btn mt-2" onclick="print()">print preview</button>', 'printer' %}
* {% iconCard 'Slick code highlighting', 'Display your code in a nice style and adjust which code languages you really use.', 'code' %}
* {% iconCard 'Sandboxes', 'Showcase small demos or full HTML pages into a responsive dual pane.', 'sidebar' %}

---

1. {% iconCard 'Accessibility', 'LibDoc was developed with accessibility awareness.', 'person-arms-spread' %}
1. {% iconCard 'Content focused', 'LibDoc is easy to install, use and deploy.', 'pen' %}
1. {% iconCard 'Performance', 'Low front-end dependencies and vanilla JS self-made components make LibDoc cross-browser compatibility and good performances. <a href="https://developers.google.com/speed/pagespeed/insights/?url=eleventy-libdoc.netlify.app" target="_blank">View performances</a>', 'rocket' %}
1. {% iconCard 'Fallback if no Javascript available', 'LibDoc can work even without Javascript with reduced features.', 'parachute' %}
1. {% iconCard 'Image transcoding', 'LibDoc transcodes and resizes your source images into production ready formats.', 'images' %}
1. {% iconCard 'Printable', 'Every page created with LibDoc can be printed. Try to print preview this page in PDF!<br><button type="button" class="btn mt-2" onclick="print()">print preview</button>', 'printer' %}
1. {% iconCard 'Slick code highlighting', 'Display your code in a nice style and adjust which code languages you really use.', 'code' %}
1. {% iconCard 'Sandboxes', 'Showcase small demos or full HTML pages into a responsive dual pane.', 'sidebar' %}{% endraw %}
```