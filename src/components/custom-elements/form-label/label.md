---
layout: doc.njk
title: FicusJS components - Custom elements - Form label
label: Form label
cssFile:
  - /css/ficus-globals.css
  - /css/ficus-utilities.css
  - /css/ficus-docs.css
  - /components/css/form-label.css
modulePath: /components/custom-elements/form-label/index.js
tags:
  - customElements
---
# Form label

Form label component.

## Example

<fc-form-label>Form label</fc-form-label>

## Importing

```js
// import the required FicusJS functions
import { use } from 'https://unpkg.com/ficusjs?module'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://unpkg.com/ficusjs-renderers@latest/dist/lit-html.js'

// import the component module
import { module as formLabelModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/form-label/index.js'

// use the module
use(formLabelModule, { renderer, html })
```

## Usage

```html
<fc-form-label>Form label</fc-form-label>
```

## API

### Props

| Name | Type | Description |
| --- | --- | --- |
| for | String | The `id` of a labelable form-related element in the same document as the `<fc-form-label>` element |
| block | Boolean | Display the label as a block-level element |
| required | Boolean | Indicate the element related to this label is required and show an asterisk |