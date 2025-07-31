---
layout: libdoc_page.liquid
eleventyNavigation:
    key: Alerts
    parent: Widgets
    order: 10
description: Shortcodes and plain HTML that allows to display informations to highlight
permalink: creating-content/widgets/alerts/index.html
date: 1111-11-11
tags:
    - shortcodes
---
Alerts can be used with shortcodes, paired shortcodes or plain HTML.

Shortcode and paired shortcode:

```liquid
{% raw %}{% alert '<CONTENT>', '<TYPE>', '<TITLE>' %}

{% alertAlt '<TYPE>', '<TITLE>' %}
CONTENT
{% endalertAlt %}{% endraw %}
```

* `<CONTENT>` is mandatory, must be a string with the content to display, can be **markdown** or **HTML**.
* `<TYPE>` is optional, defines the style of the alert. Available styles are:
    * `info`
    * `success`
    * `warning`
    * `danger`  
* `<TITLE>` is optional. It allows to display a title at the top of the alert.

Examples:

{% alertAlt 'info', 'Paired shortcode' %}
I am a **paired shortcode with markdown**.

* First item
* Second item
* Third item

And finally a [link](#)
{% endalertAlt %}
{% alert 'I am the most basic alert, neutral style. As well as any shortcode, **i support markdown!**' %}
{% alert 'I am an alert. As well as any shortcode, **i support markdown!**', 'info' %}
{% alert 'I am an alert. As well as any shortcode, **i support markdown!**', 'success' %}
{% alert 'I am an alert. As well as any shortcode, **i support markdown!**', 'warning' %}
{% alert 'I am an alert. As well as any shortcode, **i support markdown!**', 'danger' %}
{% alert 'I am an alert. As well as any shortcode, **i support markdown!**', 'info', 'My own title' %}
{% alert 'I am an alert. As well as any shortcode, **i support markdown!**', 'success', 'My own title' %}
{% alert 'I am an alert. As well as any shortcode, **i support markdown!**', 'warning', 'My own title' %}
{% alert 'I am an alert. As well as any shortcode, **i support markdown!**', 'danger', 'My own title' %}


```liquid
{% raw %}{% alertAlt 'info', 'Paired shortcode' %}
I am a **paired shortcode with markdown**.

* First item
* Second item
* Third item

And finally a [link](#)
{% endalertAlt %}
{% alert 'I am the most basic alert, neutral style. As well as any shortcode, **i support markdown!**' %}
{% alert 'I am an alert. As well as any shortcode, **i support markdown!**', 'info' %}
{% alert 'I am an alert. As well as any shortcode, **i support markdown!**', 'success' %}
{% alert 'I am an alert. As well as any shortcode, **i support markdown!**', 'warning' %}
{% alert 'I am an alert. As well as any shortcode, **i support markdown!**', 'danger' %}
{% alert 'I am an alert. As well as any shortcode, **i support markdown!**', 'info', 'My own title' %}
{% alert 'I am an alert. As well as any shortcode, **i support markdown!**', 'success', 'My own title' %}
{% alert 'I am an alert. As well as any shortcode, **i support markdown!**', 'warning', 'My own title' %}
{% alert 'I am an alert. As well as any shortcode, **i support markdown!**', 'danger', 'My own title' %}{% endraw %}
```

## Plain HTML

<aside class="widget widget-alert">
    <div class="alert">
        Default alert.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </div>
</aside>
<aside class="widget widget-alert">
    <div class="alert alert-info">
        Alert <q>info</q>.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </div>
</aside>
<aside class="widget widget-alert">
    <div class="alert alert-success">
        Alert <q>success</q>.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </div>
</aside>
<aside class="widget widget-alert">
    <div class="alert alert-warning">
        Alert <q>warning</q>.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </div>
</aside>
<aside class="widget widget-alert">
    <div class="alert alert-danger">
        Alert <q>danger</q>.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </div>
</aside>
<aside class="widget widget-alert">
    <div class="alert"
        data-title="Alert with title">
        Alert with a title.
        Just add a <q>data-title</q> attribute on paragraph.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </div>
</aside>
<aside class="widget widget-alert">
    <div class="alert alert-info"
        data-title="Alert with title and info theme">
        Alert with a title and info theme.
        Just add a <q>data-title</q> attribute on paragraph.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </div>
</aside>
<aside class="widget widget-alert">
    <div class="alert alert-success"
        data-title="Alert with title and success theme">
        Alert with a title and success theme.
        Just add a <q>data-title</q> attribute on paragraph.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </div>
</aside>
<aside class="widget widget-alert">
    <div class="alert alert-warning"
        data-title="Alert with title and warning theme">
        Alert with a title and warning theme.
        Just add a <q>data-title</q> attribute on paragraph.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </div>
</aside>
<aside class="widget widget-alert">
    <div class="alert alert-danger"
        data-title="Alert with title and danger theme">
        Alert with a title and danger theme.
        Just add a <q>data-title</q> attribute on paragraph.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </div>
</aside>

```html
<aside class="widget widget-alert">
    <div class="alert">
        Default alert.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </div>
</aside>
<aside class="widget widget-alert">
    <div class="alert alert-info">
        Alert <q>info</q>.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </div>
</aside>
<aside class="widget widget-alert">
    <div class="alert alert-success">
        Alert <q>success</q>.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </div>
</aside>
<aside class="widget widget-alert">
    <div class="alert alert-warning">
        Alert <q>warning</q>.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </div>
</aside>
<aside class="widget widget-alert">
    <div class="alert alert-danger">
        Alert <q>danger</q>.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </div>
</aside>
<aside class="widget widget-alert">
    <div class="alert"
        data-title="Alert with title">
        Alert with a title.
        Just add a <q>data-title</q> attribute on paragraph.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </div>
</aside>
<aside class="widget widget-alert">
    <div class="alert alert-info"
        data-title="Alert with title and info theme">
        Alert with a title and info theme.
        Just add a <q>data-title</q> attribute on paragraph.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </div>
</aside>
<aside class="widget widget-alert">
    <div class="alert alert-success"
        data-title="Alert with title and success theme">
        Alert with a title and success theme.
        Just add a <q>data-title</q> attribute on paragraph.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </div>
</aside>
<aside class="widget widget-alert">
    <div class="alert alert-warning"
        data-title="Alert with title and warning theme">
        Alert with a title and warning theme.
        Just add a <q>data-title</q> attribute on paragraph.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </div>
</aside>
<aside class="widget widget-alert">
    <div class="alert alert-danger"
        data-title="Alert with title and danger theme">
        Alert with a title and danger theme.
        Just add a <q>data-title</q> attribute on paragraph.
        Alerts widgets are simple paragraphs that displays informations to highlight.
        Multiple color theme variations are available.
    </div>
</aside>
```

