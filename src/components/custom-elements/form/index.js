import { createForm } from './form.js'
import { createHelpText } from './help-text.js'
import { createLabel } from './label.js'
import { createInput } from './input.js'
import { createSelect } from './select.js'
import { createTextarea } from './textarea.js'
import { OptGroup, Option } from './options.js'

const module = {
  create (helpers) {
    createForm(helpers)
    createHelpText(helpers)
    createLabel(helpers)
    createInput(helpers)
    createSelect(helpers)
    createTextarea(helpers)
  }
}

export { module, Option, OptGroup }