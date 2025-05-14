---
layout: libdoc_page.liquid
eleventyNavigation:
    key: Alerts
    parent: Widgets
    order: 10
description: Shortcodes and plain HTML that allows to display informations to highlight
permalink: creating-content/widgets/alerts/index.html
tags:
    - shortcodes
---

Alerts can be used with both plain HTML and paired shortcodes.

## Paired shortcodes

* `content` is the mandatory string.
* `type` is optional. Defines the style of the alert. Available styles are:
    * `info`
    * `success`
    * `warning`
    * `danger`  
* `title` is optional. It allows to display an title at the top of the alert.

---

{% alert %}I am the most basic alert, neutral style.{% endalert %}
{% alert 'info' %}I am an alert with a type info{% endalert %}
{% alert 'success' %}I am an alert with a type success{% endalert %}
{% alert 'warning' %}I am an alert with a type warning{% endalert %}
{% alert 'danger' %}I am an alert with a type danger{% endalert %}
{% alert '', 'Optional title' %}I am a neutral alert with a title.{% endalert %}
{% alert 'info', 'Optional title' %}I am an info alert with a title.{% endalert %}
{% alert 'success', 'Optional title' %}I am an success alert with a title.{% endalert %}
{% alert 'warning', 'Optional title' %}I am an warning alert with a title.{% endalert %}
{% alert 'danger', 'Optional title' %}I am an danger alert with a title.{% endalert %}

```liquid
{% raw %}{% alert %}I am the most basic alert, neutral style.{% endalert %}
{% alert 'info' %}I am an alert with a type info{% endalert %}
{% alert 'success' %}I am an alert with a type success{% endalert %}
{% alert 'warning' %}I am an alert with a type warning{% endalert %}
{% alert 'danger' %}I am an alert with a type danger{% endalert %}
{% alert '', 'Optional title' %}I am a neutral alert with a title.{% endalert %}
{% alert 'info', 'Optional title' %}I am an info alert with a title.{% endalert %}
{% alert 'success', 'Optional title' %}I am an success alert with a title.{% endalert %}
{% alert 'warning', 'Optional title' %}I am an warning alert with a title.{% endalert %}
{% alert 'danger', 'Optional title' %}I am an danger alert with a title.{% endalert %}{% endraw %}
```

## Plain HTML

<aside>
    <p class="alert">
        Default alert.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </p>
</aside>
<aside>
    <p class="alert alert-info">
        Alert <q>info</q>.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </p>
</aside>
<aside>
    <p class="alert alert-success">
        Alert <q>success</q>.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </p>
</aside>
<aside>
    <p class="alert alert-warning">
        Alert <q>warning</q>.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </p>
</aside>
<aside>
    <p class="alert alert-danger">
        Alert <q>danger</q>.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </p>
</aside>
<aside>
    <p  class="alert"
        data-title="Alert with title">
        Alert with a title.
        Just add a <q>data-title</q> attribute on paragraph.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </p>
</aside>
<aside>
    <p  class="alert alert-info"
        data-title="Alert with title and info theme">
        Alert with a title and info theme.
        Just add a <q>data-title</q> attribute on paragraph.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </p>
</aside>
<aside>
    <p  class="alert alert-success"
        data-title="Alert with title and success theme">
        Alert with a title and success theme.
        Just add a <q>data-title</q> attribute on paragraph.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </p>
</aside>
<aside>
    <p  class="alert alert-warning"
        data-title="Alert with title and warning theme">
        Alert with a title and warning theme.
        Just add a <q>data-title</q> attribute on paragraph.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </p>
</aside>
<aside>
    <p  class="alert alert-danger"
        data-title="Alert with title and danger theme">
        Alert with a title and danger theme.
        Just add a <q>data-title</q> attribute on paragraph.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </p>
</aside>

```html
<aside>
    <p class="alert">
        Default alert.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </p>
</aside>
<aside>
    <p class="alert alert-info">
        Alert <q>info</q>.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </p>
</aside>
<aside>
    <p class="alert alert-success">
        Alert <q>success</q>.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </p>
</aside>
<aside>
    <p class="alert alert-warning">
        Alert <q>warning</q>.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </p>
</aside>
<aside>
    <p class="alert alert-danger">
        Alert <q>danger</q>.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </p>
</aside>
<aside>
    <p  class="alert"
        data-title="Alert with title">
        Alert with a title.
        Just add a <q>data-title</q> attribute on paragraph.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </p>
</aside>
<aside>
    <p  class="alert alert-info"
        data-title="Alert with title and info theme">
        Alert with a title and info theme.
        Just add a <q>data-title</q> attribute on paragraph.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </p>
</aside>
<aside>
    <p  class="alert alert-success"
        data-title="Alert with title and success theme">
        Alert with a title and success theme.
        Just add a <q>data-title</q> attribute on paragraph.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </p>
</aside>
<aside>
    <p  class="alert alert-warning"
        data-title="Alert with title and warning theme">
        Alert with a title and warning theme.
        Just add a <q>data-title</q> attribute on paragraph.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </p>
</aside>
<aside>
    <p  class="alert alert-danger"
        data-title="Alert with title and danger theme">
        Alert with a title and danger theme.
        Just add a <q>data-title</q> attribute on paragraph.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </p>
</aside>
```

