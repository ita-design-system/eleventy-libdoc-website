---
layout: libdoc_page
permalink: configuration/edit-this-page-link/index.html
eleventyNavigation:
    key: Edit this page link configuration
    parent: Configuration
    title: Edit this page link
    order: 120
title: Edit this page link - Configuration
description: Sets the git root directory project’s URL to enable "Edit this page" button link 
date: git Last Modified
tags:
    - configuration
---
By default, there is no "Edit this page" link. To display an "Edit this page" link button at the bottom of each page, just fill the `editThisPageRootUrl` parameter of the git root directory project’s URL into `settings.json` as follows:

`"editThisPageRootUrl": "<GIT_ROOT_PUBLIC_REMOTE_URL>"`

Example for this project:

```json
{
    "editThisPageRootUrl": "https://github.com/ita-design-system/eleventy-libdoc-website/blob/main"
}
```

