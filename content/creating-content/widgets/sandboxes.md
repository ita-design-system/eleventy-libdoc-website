---
layout: libdoc_page
eleventyNavigation:
    key: Sandboxes
    parent: Widgets
    order: 80
description: Showcase small demos or full HTML pages into a responsive dual pane
permalink: creating-content/widgets/sandboxes/index.html
date: git Last Modified
tags:
    - sandbox
---
**Sandboxes are simple HTML resources separated from LibDoc’s pages scope and embedded into a LibDoc page**, just like a Youtube embed or any other. LibDoc sandboxes come with a custom user interface with both code and result. By default, code and result get 50% of the width each but it can be resized. There are two ways to include a sandbox:


| Feature                                  | Inline sandbox | File sandbox |
|:-----------------------------------------|:---------------|:-------------|
| Resizeable                               | yes            | yes          |
| Custom title                             | yes            | yes          |
| Copy code                                | yes            | yes          |
| Copy URL                                 | no             | yes          |
| At least one external HTML file required | no             | yes          |
| Open in a new tab                        | no             | yes          |
| Reload                                   | no             | yes          |

## Inline sandbox

**The easiest way to display a demo, inline sandboxes use [srcdoc attribute](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/srcdoc), ideal for small amount of code.**

If no [doctype](https://developer.mozilla.org/en-US/docs/Glossary/Doctype) is defined, entered code is display by default into the body tag.

Simply enter your HTML between Eleventy paired shortcodes `{% raw %}{% sandbox %}Your code{% endsandbox %}{% endraw %}`. 

Please note some limitations about inline sandboxes:

* Inline sandboxes can not be opened into a new tab.
* Inline sandboxes have no associated URL.
* Inline sandboxes can not be reloaded.

---

{% sandbox %}
<style>
    body {
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, Cantarell, Ubuntu, roboto, noto, helvetica, arial, sans-serif;
        font-weight: 800;
        margin: 0;
        padding: 2em;
        background: dodgerblue;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        text-align: center;
        box-sizing: border-box;
    }
</style>
<h1>I am an inline sandbox!</h1>
{% endsandbox %}

```liquid
{% raw %}{% sandbox %}
<style>
    body {
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, Cantarell, Ubuntu, roboto, noto, helvetica, arial, sans-serif;
        font-weight: 800;
        margin: 0;
        padding: 2em;
        background: dodgerblue;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        text-align: center;
        box-sizing: border-box;
    }
</style>
<h1>I am an inline sandbox!</h1>
{% endsandbox %}{% endraw %}
```

Optionally add a custom title for your inline sandbox just adding an argument to the paired shortcode.

{% sandbox 'Custom title' %}
<style>
    body {
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, Cantarell, Ubuntu, roboto, noto, helvetica, arial, sans-serif;
        font-weight: 800;
        margin: 0;
        padding: 2em;
        background: dodgerblue;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        text-align: center;
        box-sizing: border-box;
    }
</style>
<h1>I have a custom title!</h1>
{% endsandbox %}

```liquid
{% raw %}{% sandbox 'Custom title' %}
<style>
    body {
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, Cantarell, Ubuntu, roboto, noto, helvetica, arial, sans-serif;
        font-weight: 800;
        margin: 0;
        padding: 2em;
        background: dodgerblue;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        text-align: center;
        box-sizing: border-box;
    }
</style>
<h1>I have a custom title!</h1>
{% endsandbox %}{% endraw %}
```

An inline sandbox with doctype:

{% sandbox 'With doctype' %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>doctype inline sandbox</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, Cantarell, Ubuntu, roboto, noto, helvetica, arial, sans-serif;
            font-weight: 800;
            margin: 0;
            padding: 2em;
            background: dodgerblue;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            text-align: center;
            box-sizing: border-box;
        }
    </style>
</head>
<body>
    <h1>Inline sandbox with doctype</h1>
</body>
</html>
{% endsandbox %}

```liquid
{% raw %}{% sandbox 'An inline sanbox with doctype' %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>doctype inline sandbox</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, Cantarell, Ubuntu, roboto, noto, helvetica, arial, sans-serif;
            font-weight: 800;
            margin: 0;
            padding: 2em;
            background: dodgerblue;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            text-align: center;
            box-sizing: border-box;
        }
    </style>
</head>
<body>
    <h1>Inline sandbox with doctype</h1>
</body>
</html>
{% endsandbox %}{% endraw %}
```

[View examples of inline sandboxes](/content/creating-content/widgets/sandboxes-examples/inline-sandboxes.md)

## File sandbox

Suitable for large demos and content, file sandboxes includes physical HTML file anywhere from `/sandboxes/` directory. Any resources like CSS and JS can be added.

{% include 'sandbox' path: '/sandboxes/1/index.html' %}

This simple example contains only one HTML file into `sandboxes/1/`.

```liquid
{% raw %}{% include 'sandbox' path: '/sandboxes/1/index.html' %}{% endraw %}
```

[View examples of file based sandboxes](/content/creating-content/widgets/sandboxes-examples/file-sandboxes.md)