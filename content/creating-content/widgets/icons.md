---
layout: libdoc_page.liquid
eleventyNavigation:
    key: Icons
    parent: Widgets
    order: 60
description: Add icons into your content with its dedicated shortcode
permalink: creating-content/widgets/icons/index.html
date: git Last Modified
tags:
    - icons
    - shortcodes
---
## List

{% icomoon %}

## How to use

Use the dedicated shortcode `{% raw %}{% icon '<ICON_NAME>', <ICON_SIZE> %}{% endraw %}`.

* `<ICON_NAME>` is mandatory, must be a valid icon name from the list above.
* `<ICON_SIZE>` is optional, it must be an integer from 1 to 10. 

Here is a paragraph with icons.

Inherited icon size {% icon 'rocket' %}

Specified icon sizes:

{% icon 'rocket', 1 %}
{% icon 'rocket', 2 %}
{% icon 'rocket', 3 %}
{% icon 'rocket', 4 %}
{% icon 'rocket', 5 %}
{% icon 'rocket', 6 %}
{% icon 'rocket', 7 %}
{% icon 'rocket', 8 %}
{% icon 'rocket', 9 %}
{% icon 'rocket', 10 %}

```liquid
{% raw %}Inherited icon size {% icon 'rocket' %}

Specified icon sizes:

{% icon 'rocket', 1 %}
{% icon 'rocket', 2 %}
{% icon 'rocket', 3 %}
{% icon 'rocket', 4 %}
{% icon 'rocket', 5 %}
{% icon 'rocket', 6 %}
{% icon 'rocket', 7 %}
{% icon 'rocket', 8 %}
{% icon 'rocket', 9 %}
{% icon 'rocket', 10 %}{% endraw %}
```