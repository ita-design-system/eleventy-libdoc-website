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
    - filters
---
Just use `iconCard` filter as follows:

```liquid
{% raw %}{{ '<icon name>|<main text>|<description>' | iconCard }}{% endraw %}
```

Example:

{{ 'code|Icon cards|Easily highlight something important in a simple way with an icon, a main text and its description.' | iconCard }}
{{ 'check-circle|Invalid icon name|If an invalid icon card is set, default icon is applied.' | iconCard }}

```liquid
{% raw %}{{ 'code|Icon cards|Easily highlight something important in a simple way with an icon, a main text and its description.' | iconCard }}
{{ 'foo|Invalid icon name|If an invalid icon card is set, default icon is applied.' | iconCard }}{% endraw %}
```

Icon cards can be included into unordered and ordered lists:

* {{ 'person-arms-spread|Accessibility|LibDoc was developed with accessibility awareness.' | iconCard }}
* {{ 'pen|Content focused|LibDoc is easy to install, use and deploy.' | iconCard }}
* {{ 'rocket|Performance|Low front-end dependencies and vanilla JS self-made components make LibDoc cross-browser compatibility and good 1. performances. <a href="https://developers.google.com/speed/pagespeed/insights/?url=eleventy-libdoc.netlify.app" target="_blank">
         View performances
     </a>' | iconCard }}
* {{ 'parachute|Fallback if no Javascript available|LibDoc can work even without Javascript with reduced features.' | iconCard }}
* {{ 'images|Image transcoding|LibDoc transcodes and resizes your source images into production ready formats.' | iconCard }}
* {{ 'parachute|Fallback if no Javascript available|LibDoc can work even without Javascript with reduced features.' | iconCard }}
* {{ 'printer|Printable|Every page created with LibDoc can be printed. Try to print preview this page in PDF!<br>
     <button type="button" class="btn mt-2" onclick="print()">print preview</button>' | iconCard }}
* {{ 'code|Slick code highlighting|Display your code in a nice style and adjust which code languages you really use.' | iconCard }}
* {{ 'sidebar|Sandboxes|Showcase small demos or full HTML pages into a responsive dual pane.' | iconCard }}

---

1. {{ 'person-arms-spread|Accessibility|LibDoc was developed with accessibility awareness.' | iconCard }}
1. {{ 'pen|Content focused|LibDoc is easy to install, use and deploy.' | iconCard }}
1. {{ 'rocket|Performance|Low front-end dependencies and vanilla JS self-made components make LibDoc cross-browser compatibility and good 1. performances. <a href="https://developers.google.com/speed/pagespeed/insights/?url=eleventy-libdoc.netlify.app" target="_blank">
         View performances
     </a>' | iconCard }}
1. {{ 'parachute|Fallback if no Javascript available|LibDoc can work even without Javascript with reduced features.' | iconCard }}
1. {{ 'images|Image transcoding|LibDoc transcodes and resizes your source images into production ready formats.' | iconCard }}
1. {{ 'parachute|Fallback if no Javascript available|LibDoc can work even without Javascript with reduced features.' | iconCard }}
1. {{ 'printer|Printable|Every page created with LibDoc can be printed. Try to print preview this page in PDF!<br>
     <button type="button" class="btn mt-2" onclick="print()">print preview</button>' | iconCard }}
1. {{ 'code|Slick code highlighting|Display your code in a nice style and adjust which code languages you really use.' | iconCard }}
1. {{ 'sidebar|Sandboxes|Showcase small demos or full HTML pages into a responsive dual pane.' | iconCard }}

```markdown
* {% raw %}{{ 'person-arms-spread|Accessibility|LibDoc was developed with accessibility awareness.' | iconCard }}{% endraw %}
* {% raw %}{{ 'pen|Content focused|LibDoc is easy to install, use and deploy.' | iconCard }}{% endraw %}
* {% raw %}{{ 'rocket|Performance|Low front-end dependencies and vanilla JS self-made components make LibDoc cross-browser compatibility and good 1. performances. <a href="https://developers.google.com/speed/pagespeed/insights/?url=eleventy-libdoc.netlify.app" target="_blank">View performances</a>' | iconCard }}{% endraw %}
* {% raw %}{{ 'parachute|Fallback if no Javascript available|LibDoc can work even without Javascript with reduced features.' | iconCard }}{% endraw %}
* {% raw %}{{ 'images|Image transcoding|LibDoc transcodes and resizes your source images into production ready formats.' | iconCard }}{% endraw %}
* {% raw %}{{ 'parachute|Fallback if no Javascript available|LibDoc can work even without Javascript with reduced features.' | iconCard }}{% endraw %}
* {% raw %}{{ 'printer|Printable|Every page created with LibDoc can be printed. Try to print preview this page in PDF!<br><button type="button" class="btn mt-2" onclick="print()">print preview</button>' | iconCard }}{% endraw %}
* {% raw %}{{ 'code|Slick code highlighting|Display your code in a nice style and adjust which code languages you really use.' | iconCard }}{% endraw %}
* {% raw %}{{ 'sidebar|Sandboxes|Showcase small demos or full HTML pages into a responsive dual pane.' | iconCard }}{% endraw %}

---

1. {% raw %}{{ 'person-arms-spread|Accessibility|LibDoc was developed with accessibility awareness.' | iconCard }}{% endraw %}
1. {% raw %}{{ 'pen|Content focused|LibDoc is easy to install, use and deploy.' | iconCard }}{% endraw %}
1. {% raw %}{{ 'rocket|Performance|Low front-end dependencies and vanilla JS self-made components make LibDoc cross-browser compatibility and good 1. performances. <a href="https://developers.google.com/speed/pagespeed/insights/?url=eleventy-libdoc.netlify.app" target="_blank">View performances</a>' | iconCard }}{% endraw %}
1. {% raw %}{{ 'parachute|Fallback if no Javascript available|LibDoc can work even without Javascript with reduced features.' | iconCard }}{% endraw %}
1. {% raw %}{{ 'images|Image transcoding|LibDoc transcodes and resizes your source images into production ready formats.' | iconCard }}{% endraw %}
1. {% raw %}{{ 'parachute|Fallback if no Javascript available|LibDoc can work even without Javascript with reduced features.' | iconCard }}{% endraw %}
1. {% raw %}{{ 'printer|Printable|Every page created with LibDoc can be printed. Try to print preview this page in PDF!<br><button type="button" class="btn mt-2" onclick="print()">print preview</button>' | iconCard }}{% endraw %}
1. {% raw %}{{ 'code|Slick code highlighting|Display your code in a nice style and adjust which code languages you really use.' | iconCard }}{% endraw %}
1. {% raw %}{{ 'sidebar|Sandboxes|Showcase small demos or full HTML pages into a responsive dual pane.' | iconCard }}{% endraw %}
```