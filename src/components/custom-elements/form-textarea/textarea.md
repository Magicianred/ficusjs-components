---
layout: doc.njk
title: FicusJS components - Custom elements - Form textarea
label: Form textarea
cssFile:
  - /css/ficus-globals.css
  - /css/ficus-utilities.css
  - /css/ficus-docs.css
  - /components/css/form.css
  - /components/css/form-help-text.css
  - /components/css/form-label.css
  - /components/css/form-textarea.css
modulePath: /components/custom-elements/form-textarea/index.js
tags:
  - customElements
---
# Form textarea

Form textarea component.

## Example

<fc-form>
  <fc-form-textarea name="textareaInput1" label="Form textarea" help-text="Form textarea help text"></fc-form-textarea>
</fc-form>

## Importing

```js
// import the required FicusJS functions
import { use } from 'https://unpkg.com/ficusjs?module'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://unpkg.com/ficusjs-renderers@latest/dist/lit-html.js'

// import the component module
import { module as formTextareaModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/form-textarea/index.js'

// use the module
use(formTextareaModule, { renderer, html })
```

## Usage

```html
<fc-form-textarea name="textareaInput1" label="Form textarea input" help-text="Form textarea input help text"></fc-form-textarea>
```

## API

### Props

| Name | Type | Description |
| --- | --- | --- |
| autocomplete | String | Hint for form autofill feature |
| autofocus | Boolean | Automatically focus the form input when the page is loaded |
| cols | Number | The visible width of the text control, in average character widths |
| disabled | Boolean | Whether the form input is disabled |
| helpText | String | Text which helps a user complete a form input |
| id | String | A unique identifier for the form input |
| inline | Boolean | Show the input on the same horizontal row as other form fields |
| label | String | A caption for the form input |
| maxlength | Number | Maximum length (number of characters) of value |
| minlength | Number | Minimum length (number of characters) of value |
| multiple | Boolean | Whether to allow multiple values |
| name | String | A required string specifying a name for the form input. This name is submitted along with the input's value when the form data is submitted |
| placeholder | String | Text that appears in the form input when it has no value set |
| readonly | Boolean | The value is not editable |
| required | Boolean | A value is required for the form to be submittable |
| rows | Number | The number of visible text lines for the control |
| size | Number | Specifies how much of the input is shown |
| spellcheck | Boolean | Specifies whether the textarea is subject to spell checking by the underlying browser/OS |
| tabindex | Number | An integer attribute indicating if the input is focusable |
| title | String | Text representing advisory information related to the input typically shown as a tooltip |
| wrap | String | Indicates how the control wraps text |

### Events

| Name |Description |
| --- | --- |
| input | Fires when the value of the input changes. This is for each alteration of the input's value |
| change | Fires when an alteration to the input's value is committed by the user |

#### `Event` details

When a `<fc-form-textarea>` event is emitted, it provides the following additional information about the event.

| Property | Description |
| --- | --- |
| `event.detail.component` | The `<fc-form-textarea>` instance |
| `event.detail.nativeFormElement` | The native `<textarea>` element within the component |
| `event.detail.name` | The `name` attribute value |
| `event.detail.value` | The `value` of the component |
| `event.detail.originalEvent` | The original event |