---
layout: libdoc_page
eleventyNavigation:
    key: Inline sandboxes examples
    parent: Sandboxes
description: Examples of inline sandboxes
permalink: creating-content/widgets/sandboxes/inline-examples/index.html
tags:
    - sandbox
---
{% sandbox 'A simple inline sandbox' %}
<style>
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 2em;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: yellowgreen;
        color: white;
        font-weight: 800;
        letter-spacing: -0.05em;
        min-height: 100vh;
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, Cantarell, Ubuntu, roboto, noto, helvetica, arial, sans-serif;
    }
    h1 {
        margin: 0;
        text-transform: uppercase;
    }
</style>
<h1>I am the simpliest sandbox!</h1>
{% endsandbox %}


{% sandbox 'A Scroll Btween demo' %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scroll Btween</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, Cantarell, Ubuntu, roboto, noto, helvetica, arial, sans-serif;
            margin: 0;
            padding:0;
            height: 400vh;
        }
        .wrapper-playground {
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background-size: 120%;
            background-position: 40% center;
            background-repeat: no-repeat;
        }
        .wrapper-playground.gyp1 {
            background-image: url(/sandboxes/2/gyp-back-1000.webp);
        }
        .wrapper-playground.gyp2 {
            background-image: url(/sandboxes/2/gyp2-back-1000.webp);
        }
        .wrapper-playground::before {
            content: '';
            float: left;
            padding-bottom: 66.66%;
        }
        figure {
            display: flex;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            line-height: 0;
            margin: 0;
            padding: 0;
        }
        figure img {
            max-width: 100%;
            max-height: 100%;
            width: 100%;
            height: auto;
        }
        header {
            text-align: center;
            color: #FFFFFFc2;
        }
        header h1 {
            margin-top: 0;
            margin-bottom: 0;
            font-size: 13vw;
            font-family: sans-serif;
        }
        header h1 span {
            display: block;
            position: relative; /* Sets in front of the image */
            z-index: 1; /* Sets in front of the image */
        }
        header p {
            margin: 0;
            font-style: italic;
            font-size: 5vmin;
        }
        body > p { text-align: right; font-size: 12px; padding-right: 1em }
        #detector { position: absolute; top: 100vh; }
        #scroll-btween-debugbar { display: none; }
    </style>
</head>
<body>
    <article class="wrapper-playground gyp1"
        scroll-btween="gyp-back"
        data-detector="detector"
        data-background-position="|70 to 30|% center">
        <header>
            <h1>Free like <span>a bird</span></h1>
            <p>Gypaetus barbatus</p>
        </header>
        <figure scroll-btween="gyp-front"
            data-detector="detector"
            data-left="|3 to -3|%"
            data-top="|0 to -20|%">
            <img src="/sandboxes/2/gyp-front-1000.webp"
                alt="Bearded vulture">
        </figure>
    </article>
    <div id="detector"></div>
    <article class="wrapper-playground gyp2"
        scroll-btween="gyp-back2"
        data-background-position="|30 to 70|% center">
        <header>
            <h1>Bearded <span>vulture</span></h1>
            <p>Gypaetus barbatus</p>
        </header>
        <figure scroll-btween="gyp-front2"
            data-left="|0 to 13|%"
            data-top="|0 to -5|%">
            <img src="/sandboxes/2/gyp2-front-1000.webp"
                alt="Bearded vulture">
        </figure>
    </article>
    <p>Photo credits Olivier 3lanc</p>
    <script src="/sandboxes/2/scroll-btween.min.js"></script>
</body>
</html>
{% endsandbox %}