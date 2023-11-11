![SketchUI.js Logo](./SkectUI-logo.png)

## Installation

Alternatively use the standalone version found in ./dist locally

```html
<link rel="stylesheet" href="SketchUI.css" />
```

```html
<script type="text/javascript" src="SketchUI.js"></script>
```

### Required Libraries

```html
<!--  remixixon is needed for Basic icons -->
<link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
```

## Getting Started

create a complete header component by choosing only the options you want

```javascript
const headerOptions = {
    logoText: "Cosmic",
    logoUrl: "/",
    links: [
        { text: "Home", url: "#" },
        { text: "About us", url: "#" },
        { text: "Services", url: "#" },
        { text: "Contact us", url: "#" },
        { text: "Blog", url: "#" },
    ],
    buttons: [
        { icon: "ri-search-line", id: "search" },
        { icon: "ri-user-3-line", id: "profile" },
    ],
    buttonText: "Começar",
}

const header = new SketchUI.Header(headerOptions);
header.createHeader();
```

```html
<header class="header"></header>
```

## Examples

For detailed usage examples and demos of each effect, check out the [examples](/examples/) directory in the Shery.js repository.
