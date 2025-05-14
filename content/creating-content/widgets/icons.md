---
layout: libdoc_page.liquid
eleventyNavigation:
    key: Icons
    parent: Widgets
    order: 60
description: Available icons to use with the content
permalink: creating-content/widgets/icons/index.html
tags:
    - icons
    - filters
---
## List

{% icomoon %}

## How to use

Use the dedicated filter `{% raw %}{{ '<ICON_NAME>' | icon }}{% endraw %}`. 

Optionally set the size of the icon adding a comma followed by an integer from 1 to 10 `{% raw %}{{ '<ICON_NAME>,<INTEGER>' | icon }}{% endraw %}`. 

Here is a paragraph with icons.

Inherited icon size {{ 'rocket' | icon }}

Specified icon sizes:

{{ 'rocket,1' | icon }}
{{ 'rocket,2' | icon }}
{{ 'rocket,3' | icon }}
{{ 'rocket,4' | icon }}
{{ 'rocket,5' | icon }}
{{ 'rocket,6' | icon }}
{{ 'rocket,7' | icon }}
{{ 'rocket,8' | icon }}
{{ 'rocket,9' | icon }}
{{ 'rocket,10' | icon }}

```liquid
{% raw %}Inherited icon size {{ 'rocket' | icon }}

Specified icon sizes:

{{ 'rocket,1' | icon }}
{{ 'rocket,2' | icon }}
{{ 'rocket,3' | icon }}
{{ 'rocket,4' | icon }}
{{ 'rocket,5' | icon }}
{{ 'rocket,6' | icon }}
{{ 'rocket,7' | icon }}
{{ 'rocket,8' | icon }}
{{ 'rocket,9' | icon }}
{{ 'rocket,10' | icon }}{% endraw %}
```