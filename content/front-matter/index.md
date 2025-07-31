---
layout: libdoc_page
permalink: front-matter/index.html
eleventyNavigation:
    key: Front Matter
    title: The Front Matter
    order: 40
title: LibDoc’s Front Matter 
description: Documentation of all front matter settings related to a LibDoc page
date: 1111-11-11
tags:
    - front-matter
    - permalink
    - navigation
    - dates
    - author
    - description
    - SEO
---
List of LibDoc’s front matter parameters:

*   `layout` - 
    *Mandatory* - 
    Usually set to <var>libdoc_page</var>. Sets the name of the template for the page.
*   `permalink` - 
    *Optional* - 
    Sets the permalink for the page. [Permalink](https://www.11ty.dev/docs/permalinks/ "View 11ty permalinks reference page")
*   `eleventyNavigation` - 
    *Optional* - 
    Object containing primary navigation settings via [11ty Navigation plugin](https://www.11ty.dev/docs/plugins/navigation/). 
    When properly set, the page gets a link into the main menu and its breadcrumb.
    *   `key` -
        *Mandatory* - 
        Represents the title and unique identifier for the item into the main menu navigation. 
        [11ty navigation](https://www.11ty.dev/docs/plugins/navigation/#adding-templates-to-the-navigation "View 11ty navigation plugin how to set the key for each item")
    *   `parent` - 
        *Optional* - 
        If you want this page to be a child of another, enter the **key** of the parent’s page. 
        [Set item’s parent](https://www.11ty.dev/docs/plugins/navigation/#humans-md "View 11ty navigation plugin how to set another item as parent")
    *   `title` - 
        *Optional* - 
        By default, the key is used as text for the link, this parameter overrides the key and uses it as alternate text. 
        [Alternative text](https://www.11ty.dev/docs/plugins/navigation/#use-alternate-text-for-the-navigation-link "View 11ty navigation plugin how to set an alternate text for the item")
    *   `order` - 
        *Optional* - 
        Arbitrary number that allows to organize your items into the main menu.
        [Set items order](https://www.11ty.dev/docs/plugins/navigation/#re-ordering-items "View 11ty navigation plugin how to re-order items")
    *   `url` - 
        *Optional* - 
        To create an navigation item with an external link. 
        [URL override](https://www.11ty.dev/docs/plugins/navigation/#overriding-the-url "View 11ty navigation plugin how to override the URL")
*   `title` - 
    *Optional* - 
    Overrides only the header title of the page even if <var>eleventyNavigation.key</var> is set. 
    Does not override link text into the primary navigation.
*   `description` - 
    *Optional* - 
    Sets the description of the page displayed below the title.
*   `tags` - 
    *Optional* - 
    An array of tags assigned to the page.
    [11ty tags](https://www.11ty.dev/docs/collections/ "View 11ty collections and tags page")
*   `date` - 
    *Optional* - 
    Overrides the default date (last modified) displayed into the header of the page. 
    [Custom dates](https://www.11ty.dev/docs/dates/#setting-a-content-date-in-front-matter "View 11ty dates reference page")
*   `author` - 
    *Optional* - 
    Overrides the default author displayed from the LibDoc’s configuration into the header of the page.


Front matter of the current page:

```yaml
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
```
