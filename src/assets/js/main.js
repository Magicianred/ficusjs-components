import { use } from 'https://cdn.skypack.dev/ficusjs'
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers/lit-html'
import { module as navbarModule } from 'https://cdn.skypack.dev/@ficusjs/components/custom-elements/navbar'
use(navbarModule, { renderer, html })