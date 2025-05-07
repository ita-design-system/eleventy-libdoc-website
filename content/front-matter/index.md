---
layout: libdoc_page
permalink: front-matter/index.html
eleventyNavigation:
    key: Front Matter
    title: The Front Matter
    order: 40
title: LibDoc’s Front Matter 
description: Documentation of all front matter settings related to a LibDoc page
tags:
    - front-matter
    - permalink
    - navigation
    - dates
    - author
    - description
    - SEO
date: Last Modified
---

Front matter of the current page:

```yaml
layout: libdoc_page
permalink: front-matter/index.html
eleventyNavigation:
    key: Front Matter
    title: The Front Matter
    order: 20
title: LibDoc’s Front Matter 
description: Documentation of all front matter settings related to a LibDoc page
tags:
    - Front matter
    - permalink
    - navigation
    - dates
    - author
    - description
    - SEO
date: Last Modified
```

## List of LibDoc’s front matter parameters

* <var class="c-primary-500">layout</var> - *Mandatory* - Usually set to <var>libdoc_page</var>. Sets the name of the template for the page.
* <var class="c-primary-500">permalink</var> - *Optional* - Sets the permalink for the page. [ref](https://www.11ty.dev/docs/permalinks/ "View 11ty permalinks reference page")
* <var class="c-primary-500">eleventyNavigation</var> - *Optional* - Object containing primary navigation settings via [11ty Navigation plugin](https://www.11ty.dev/docs/plugins/navigation/). When properly set, the page gets a link into the main menu and its breadcrumb.
    * <var class="c-primary-500">key</var> - *Mandatory* - Represents the title and unique identifier for the item into the main menu navigation. [11ty Reference](https://www.11ty.dev/docs/plugins/navigation/#adding-templates-to-the-navigation "View 11ty navigation plugin how to set the key for each item")
    * <var class="c-primary-500">parent</var> - *Optional* - If you want this page to be a child of another, enter the **key** of the parent’s page. [Ref](https://www.11ty.dev/docs/plugins/navigation/#humans-md "View 11ty navigation plugin how to set another item as parent")
    * <var class="c-primary-500">title</var> - *Optional* - By default, the key is used as text for the link, this parameter overrides the key and uses it as alternate text. [Ref](https://www.11ty.dev/docs/plugins/navigation/#use-alternate-text-for-the-navigation-link "View 11ty navigation plugin how to set an alternate text for the item")
    * <var class="c-primary-500">order</var> - *Optional* - Arbitrary number that allows to organize your items into the main menu. [Ref](https://www.11ty.dev/docs/plugins/navigation/#re-ordering-items "View 11ty navigation plugin how to re-order items")
    * <var class="c-primary-500">url</var> - *Optional* - To create an navigation item with an external link. [Ref](https://www.11ty.dev/docs/plugins/navigation/#overriding-the-url "View 11ty navigation plugin how to override the URL")
* <var class="c-primary-500">title</var> - *Optional* - Overrides only the header title of the page even if `eleventyNavigation.key` is set. Does not override link text into the primary navigation.
* <var class="c-primary-500">description</var> - *Optional* - Sets the description of the page displayed below the title.
* <var class="c-primary-500">tags</var> - *Optional* - An array of tags assigned to the page. [Ref](https://www.11ty.dev/docs/collections/ "View 11ty collections and tags page")
* <var class="c-primary-500">date</var> - *Optional* - Overrides the default date (last modified) displayed into the header of the page. [Ref](https://www.11ty.dev/docs/dates/#setting-a-content-date-in-front-matter "View 11ty dates reference page")
* <var class="c-primary-500">author</var> - *Optional* - Overrides the default author displayed from the LibDoc’s configuration into the header of the page.

