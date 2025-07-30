---
layout: libdoc_page.liquid
eleventyNavigation:
    key: Details and accordions
    parent: Widgets
    order: 40
description: Create simple dropdown toggle and accordions
permalink: creating-content/widgets/details-and-accordions/index.html
date: git Last Modified
tocEnabled: false
---
<details>
    <summary>LibDoc description</summary>
    <p>LibDoc is an <a href="https://www.11ty.dev">Eleventy</a> starter project dedicated to documentation.</p>
</details>

```html
<details>
    <summary>LibDoc description</summary>
    <p>LibDoc is an <a href="https://www.11ty.dev">Eleventy</a> starter project dedicated to documentation.</p>
</details>
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)

In addition, contiguous details tags with the same name attribute value can create accordions. See example below.

<details name="languages">
    <summary>HTML</summary>
    <h2>Semantic Frist!</h2>
    <p>
        Write semantic content with <abbr title="Hyper Text Markup Language">HTML</abbr>.
        Learn more at <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">MDN</a>
    </p>
</details>
<details name="languages">
    <summary>CSS</summary>
    <h2>Get Styled!</h2>
    <p>
        Customize and add style to your content with <abbr title="Cascading Style Sheets">CSS</abbr>.
        Learn more at <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">MDN</a>
    </p>
</details>
<details name="languages">
    <summary>Javascript</summary>
    <h2>Sprinkle some magic</h2>
    <p>
        Add spicy interactions to your pages with <abbr title="JavaScript">JS</abbr> programing language.
        Learn more at <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">MDN</a>
    </p>
</details>

```html
<details name="languages">
    <summary>HTML</summary>
    <h2>Semantic Frist!</h2>
    <p>
        Write semantic content with <abbr title="Hyper Text Markup Language">HTML</abbr>.
        Learn more at <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">MDN</a>
    </p>
</details>
<details name="languages">
    <summary>CSS</summary>
    <h2>Get Styled!</h2>
    <p>
        Customize and add style to your content with <abbr title="Cascading Style Sheets">CSS</abbr>.
        Learn more at <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">MDN</a>
    </p>
</details>
<details name="languages">
    <summary>Javascript</summary>
    <h2>Sprinkle some magic</h2>
    <p>
        Add spicy interactions to your pages with <abbr title="JavaScript">JS</abbr> programing language.
        Learn more at <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">MDN</a>
    </p>
</details>
```