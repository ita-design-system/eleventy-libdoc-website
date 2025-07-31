---
layout: libdoc_page.liquid
eleventyNavigation:
    key: Embeds
    parent: Widgets
    order: 50
description: Code integration results of various content providers
permalink: creating-content/widgets/embeds/index.html
date: 1111-11-11
---
Here are few examples of how Eleventy LibDoc renders embeds from various sources.

## Simple embed filter

The most simple way to include an iframe, just add the embed filter to your <abbr title="Uniform Resource Locator">URL</abbr> string like this `{% raw %}{{ '<URL_STRING>' | embed }}{% endraw %}`.

{{ 'https://www.youtube-nocookie.com/embed/kzf9A9tkkl4?controls=0' | embed }}

```liquid
{% raw %}{{ 'https://www.youtube-nocookie.com/embed/kzf9A9tkkl4?controls=0' | embed }}{% endraw %}
```

## Shortcode

If you need to add custom height, use embed shortcode instead. `{% raw %}{% embed '<URL_STRING>', Integer %}{% endraw %}`

{% embed 'https://sketchfab.com/models/b88c8c45f3ce454f925db4128f339c5e/embed', 500 %}

```liquid
{% raw %}{% embed 'https://sketchfab.com/models/b88c8c45f3ce454f925db4128f339c5e/embed', 500 %}{% endraw %}
```


