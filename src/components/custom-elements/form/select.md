---
layout: doc.njk
title: FicusJS components - Custom elements - Select
label: Select
cssFile:
  - /css/ficus-globals.css
  - /css/ficus-utilities.css
  - /css/ficus-docs.css
  - /components/css/help-text.css
  - /components/css/label.css
  - /components/css/select.css
modulePath: /components/custom-elements/form/index.js
tags:
  - customElements
---
# Select

Select component.

## Example

<fc-select name="selectInput1" label="Select input" help-text="Text input help text">
  <option value=""></option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
  <option value="option4">Option 4</option>
  <option value="option5">Option 5</option>
</fc-select>

## Importing

```js
// import the required FicusJS functions
import { use } from 'https://unpkg.com/ficusjs?module'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://unpkg.com/ficusjs-renderers@latest/dist/lit-html.js'

// import the component module
import { module as formModule, Option, OptGroup } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/form/index.js'

// use the module
use(formModule, { renderer, html })
```

## Usage

```html
<fc-select name="selectInput1" label="Text input" help-text="Text input help text">
  <option value=""></option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
  <option value="option4">Option 4</option>
  <option value="option5">Option 5</option>
</fc-select>
```

## API

### Props

| Name | Type | Description |
| --- | --- | --- |
| autocomplete | String | Hint for form autofill feature |
| autofocus | Boolean | Automatically focus the form input when the page is loaded |
| disabled | Boolean | Whether the form input is disabled |
| helpText | String | Text which helps a user complete a form input |
| id | String | A unique identifier for the form input |
| inline | Boolean | Show the input on the same horizontal row as other form fields |
| label | String | A caption for the form input |
| multiple | Boolean | Whether to allow multiple values |
| name | String | A required string specifying a name for the form input. This name is submitted along with the input's value when the form data is submitted |
| options | Array | Set the select element child elements using an Array of `Option` or `OptGroup` class instances |
| readonly | Boolean | The value is not editable |
| required | Boolean | A value is required for the form to be submittable |
| size | Number | Specifies how much of the input is shown |
| tabindex | Number | An integer attribute indicating if the input is focusable |
| title | String | Text representing advisory information related to the input typically shown as a tooltip |

### Events

| Name |Description |
| --- | --- |
| input | Fires when the value of the input changes. This is for each alteration of the input's value |
| change | Fires when an alteration to the input's value is committed by the user |

#### `Event` details

When a `<fc-select>` event is emitted, it provides the following additional information about the event.

| Property | Description |
| --- | --- |
| `event.detail.component` | The `<fc-select>` instance |
| `event.detail.nativeFormElement` | The native `<select>` element within the component |
| `event.detail.name` | The `name` attribute value |
| `event.detail.value` | The `value` of the component |
| `event.detail.originalEvent` | The original event |

## Select options

The select contains child elements that are either `<option>` or `<optgroup>`

## Setting options

You can programmatically set the select elements using the `options` property.

### `Option` class

The `Option` class creates child elements of type `<option>`.

```js
const options = [
  new Option('', ''),
  new Option('Option 1', 'option1', false, true),
  new Option('Option 2', 'option2', true),
  new Option('Option 3', 'option3')
]
```

When creating a new instance of the `Option` class, the following arguments must be provided.

| Argument | Type | Description |
| --- | --- | --- |
| `label` | `String` | The text indicating the meaning of the option |
| `value` | `String` | The value to be submitted with the form |
| `selected` | `Boolean` | This item is initially selected |
| `disabled` | `Boolean` | This item is not selectable |

### `OptGroup` class

The `OptGroup` class creates child elements of type `<optgroup>`.

```js
const options = [
  new OptGroup(
    'Group 1',
    [
      new Option('Option 1.1', 'option1.1')
    ],
    true),
  new OptGroup(
    'Group 2',
    [
      new Option('Option 2.1', 'option2.1'),
      new Option('Option 2.2', 'option2.2', true)
    ]),
  new OptGroup(
    'Group 3',
    [
      new Option('Option 3.1', 'option3.1'),
      new Option('Option 3.2', 'option3.2'),
      new Option('Option 3.3', 'option3.3')
    ])
]
```

When creating a new instance of the `OptGroup` class, the following arguments must be provided.

| Argument | Type | Description |
| --- | --- | --- |
| `label` | `String` | The name of the group of options |
| `options` | `Array.<Option>` | The group of options - instances of the `Option` class |
| `disabled` | `Boolean` | None of the items in this option group is selectable |