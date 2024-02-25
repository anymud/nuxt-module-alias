
import { defineNuxtModule } from '@nuxt/kit'
import moduleAlias from 'module-alias'
import { createConsola } from 'consola'
const consola = createConsola().withTag('alias')

export default defineNuxtModule({
  meta: {
    name: '@anymud/nuxt-module-alias',
  },
  async setup(options, nuxt) {
    consola.info('Setting up module-alias')
    for (const [key, value] of Object.entries(nuxt.options.alias)) {
      consola.success(`Adding alias ${key} -> ${value}`) 
      moduleAlias.addAlias(key, value)
    }
  },
})
  