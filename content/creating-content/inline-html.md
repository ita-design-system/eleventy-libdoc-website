---
layout: libdoc_page
eleventyNavigation:
    key: Inline HTML
    parent: Creating content
    order: 20
description: Use some raw HTML tags into your pages
permalink: creating-content/inline-html/index.html
date: git Last Modified
---

In addition of common [markdown](/content/creating-content/markdown.md), it is possible to use some raw HTML tags.

## Abbr

With <abbr title="Eleventy">11ty</abbr> you can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your
<abbr title="HyperText Markup Language">HTML</abbr>. Title attribute is optional but if set, `<abbr>` tags are clickable and expanded once on click.

<aside>
    <p class="alert alert-success">
        On Eleventy LibDoc, abbreviation elements with title attribute 
        are clickable just like 
        <abbr title="Exempli Gratia">E.G.</abbr>
    </p>
</aside>

```markdown
With <abbr title="Eleventy">11ty</abbr> you can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your
<abbr title="HyperText Markup Language">HTML</abbr>. Title attribute is optional. Title attribute is optional but if set, `<abbr>` tags are clickable and expanded once on click.
```

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)

## Deleted text

When you want to display something that was <del>added</del> deleted.

```html
When you want to display something that was <del>added</del> deleted.
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del)


## Inline quotation

And then Albus says 
<q cite="https://www.harrypotter.com/fr/features/pearls-of-wisdom-from-professor-dumbledore">
    It is our choices, Harry, that show what we truly are, far more than our abilities.
</q> 
to Harry.

```html
And then Albus says 
<q cite="https://www.harrypotter.com/fr/features/pearls-of-wisdom-from-professor-dumbledore">
    It is our choices, Harry, that show what we truly are, far more than our abilities.
</q> 
to Harry.
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q)

## Inserted text

When you want to display something that was <ins>added</ins>.

```html
When you want to display something that was <ins>added</ins>.
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins)

## Keyboard input element

You can use <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to refresh page and empty cache.

```html
You can use <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to refresh page and empty cache.
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd)

## Line break

* **I am an item** <br>
    Sometimes it comes we need to break the line inside markdown
* **I am another item** <br>
    Sometimes it comes we need to re-break the line inside markdown
* **I am the ultimate item** <br>
    Sometimes it comes we need to re-re-break the line inside markdown


```markdown
* **I am an item** <br>
    Sometimes it comes we need to break the line
* **I am another item** <br>
    Sometimes it comes we need to re-break the line
* **I am the ultimate item** <br>
    Sometimes it comes we need to re-re-break the line
```

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br)

## Links

Just like [Markdown internal links](/content/creating-content/markdown.md#internal-links), you can write dynamic HTML links pointing to input path and then easily create links between your project pages. **`permalink` must be set into the destination page**. If permalink changes on destination page, internal links pointing to this page change accordingly. 

Of course, non-dynamic links work too! Here is an example:

Let’s go to <a href="/content/creating-content/markdown.md">Markdown</a> page (dynamic link) 
or <a href="/content/front-matter/index.md">Front matter</a> page (dynamic link) 
or <a href="/content/front-matter/front-matter-minimal/">minimal</a> page (static link) 

```html
Let’s go to <a href="/content/creating-content/markdown.md">Markdown</a> page (dynamic link) 
or <a href="/content/front-matter/index.md">Front matter</a> page (dynamic link) 
or <a href="/content/front-matter/front-matter-minimal/">minimal</a> page (static link) 
```

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

## Mark

Here is a paragraph with a mark tag that <mark>highlights text fragment</mark>.

```html
Here is a paragraph with a mark tag that <mark>highlights text fragment</mark>.
```

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)

## Ruby

Even if not common, ruby tag represents <ruby>small annotations<rt>Ruby</rt></ruby> that are rendered above spec (single work recommended).
<ruby>A text fragment <rt>Description</rt></ruby> can be described.

```html
Even if not common, ruby tag represents <ruby>small annotations<rt>Ruby</rt></ruby> that are rendered above spec (single work recommended).
<ruby>A text fragment <rt>Description</rt></ruby> can be described.
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby)

## Sample output

Neo wakes up and reads his screen saying, 
<samp>The Matrix has you... Follow the white rabbit... Knock, knock, Neo.</samp>

```html
Neo wakes up and reads his screen saying, 
<samp>The Matrix has you... Follow the white rabbit... Knock, knock, Neo.</samp>
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp)

## Side comment

Eleventy LibDoc is a starter project to create documentation website.

<small>Eleventy LibDoc is under MIT License.</small>

```html
<small>Eleventy LibDoc is under MIT License.</small>
```

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small)

## Strikethrough

This tag is useful when you wish <s>to emphasis</s> to display something not relevant anymore.

```html
This tag is useful when you wish <s>to emphasis</s> to display something not relevant anymore.
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s)

## Subscript

Caffeine **C**<sub>8</sub>**H**<sub>10</sub>**N**<sub>4</sub>**O**<sub>2</sub> is known to be the favorite’s developer molecule.

```html
Caffeine **C**<sub>8</sub>**H**<sub>10</sub>**N**<sub>4</sub>**O**<sub>2</sub> is known to be the favorite’s developer molecule.
```

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub)

## Superscript

Equation *a*<sup>2</sup> + *b*<sup>2</sup> = *c*<sup>2</sup> usually expresses the *Pythagorean theorem*.

```markdown
Equation *a*<sup>2</sup> + *b*<sup>2</sup> = *c*<sup>2</sup> usually expresses the *Pythagorean theorem*.
```

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup)

## Time and date

The concert took place on <time datetime="2018-07-07">July 7th, 2018</time> 
and started at <time datetime="PT20H30M">20h 30m</time>.

```html
The concert took place on <time datetime="2018-07-07">July 7th, 2018</time> 
and started at <time datetime="PT20H30M">20h 30m</time>.
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)

## Unarticulated annotation

Here is a paragraph with an <u>unarticulated annotation</u>.

```html
Here is a paragraph with an <u>unarticulated annotation</u>.
```

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u)

## Variable

The volume of a box is <var>l</var> × <var>w</var> × <var>h</var>, where
<var>l</var> represents the length, <var>w</var> the width and
<var>h</var> the height of the box.

```html
The volume of a box is <var>l</var> × <var>w</var> × <var>h</var>, where
<var>l</var> represents the length, <var>w</var> the width and
<var>h</var> the height of the box.
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var)