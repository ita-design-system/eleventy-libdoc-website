---
layout: libdoc_page.liquid
eleventyNavigation:
    key: Icons
    parent: Widgets
    order: 60
description: Add icons into your content with its dedicated shortcode
permalink: creating-content/widgets/icons/index.html
tags:
    - icons
    - shortcodes
---
## List

Here is the list of included SVG icons, [you can use your own icons](#custom-icon).

{% icons %}

## How to use

Use the dedicated shortcode `{% raw %}{% icon '<ICON_NAME>', <ICON_SIZE> %}{% endraw %}`. **Icon size is based on CSS font-size property.**

* `<ICON_NAME>`
    * Can be a system related icon name [from this list](#list).
    * Can be a [path or remote URL](#custom-icon) to a SVG or transparency raster image (PNG, AVIF)
* `<ICON_SIZE>` [Fixed font size](#fixed-icon-sizes) is optional, it must be an integer from 1 to 10. 

### Inherited icon size

Default icon size is `1em` {% icon 'rocket' %}. **The icon size is inherited**, you can set your own size through the parent element `font-size` property, for example:

<div style="font-size: 100px">
    {% icon 'rocket' %}
</div>

```liquid
<div style="font-size: 100px">
    {% raw %}{% icon 'rocket' %}{% endraw %}
</div>
```

### Fixed icon sizes

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

## Custom icon

Use you own icon! Widget supports both SVG and raster images with transparency. You can set a path or an URL as name for the icon.

<table>
    <tr>
        <td>Local SVG</td>
        <td>
            {% icon '/assets/logo-11ty.svg', 10 %}
        </td>
        <td><code>{% raw %}{% icon '/assets/logo-11ty.svg', 10 %}{% endraw %}</code></td>
    </tr>
    <tr>
        <td>Remote SVG</td>
        <td>
            {% icon 'https://cdn.jsdelivr.net/gh/ita-design-system/ita-medias@main/logo-11ty.svg', 10 %}
        </td>
        <td><code>{% raw %}{% icon 'https://cdn.jsdelivr.net/gh/ita-design-system/ita-medias@main/logo-11ty.svg', 10 %}{% endraw %}</code></td>
    </tr>
    <tr>
        <td>Local PNG</td>
        <td>
            {% icon '/assets/logo-11ty.png', 10 %}
        </td>
        <td><code>{% raw %}{% icon '/assets/logo-11ty.png', 10 %}{% endraw %}</code></td>
    </tr>
    <tr>
        <td>Remote PNG</td>
        <td>
            {% icon 'https://cdn.jsdelivr.net/gh/ita-design-system/ita-medias@main/logo-11ty.png', 10 %}
        </td>
        <td><code>{% raw %}{% icon 'https://cdn.jsdelivr.net/gh/ita-design-system/ita-medias@main/logo-11ty.png', 10 %}{% endraw %}</code></td>
    </tr>
    <tr>
        <td>Local AVIF</td>
        <td>
            {% icon '/assets/logo-11ty.avif', 10 %}
        </td>
        <td><code>{% raw %}{% icon '/assets/logo-11ty.avif', 10 %}{% endraw %}</code></td>
    </tr>
    <tr>
        <td>Remote AVIF</td>
        <td>
            {% icon 'https://cdn.jsdelivr.net/gh/ita-design-system/ita-medias@main/logo-11ty.avif', 10 %}
        </td>
        <td><code>{% raw %}{% icon 'https://cdn.jsdelivr.net/gh/ita-design-system/ita-medias@main/logo-11ty.avif', 10 %}{% endraw %}</code></td>
    </tr>
</table>

## Custom color

Just like icon size is related to CSS font-size property, icon color is inherited and can be customized as follows:

{% alert 'Assigning a custom color might results bad color contrast in light or dark mode', 'warning', 'Color scheme issue' %}

<div style="color: fuchsia">
    {% icon '/assets/logo-11ty.avif', 10 %}
</div>

```liquid
<div style="color: fuchsia">
    {% raw %}{% icon '/assets/logo-11ty.avif', 10 %}{% endraw %}
</div>
```


