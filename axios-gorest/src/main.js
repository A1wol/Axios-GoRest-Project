import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import { createPinia, PiniaVuePlugin } from 'pinia'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import App from './App.vue'
import router from './router'

Vue.use(VueCompositionAPI)

const app = createApp({
  router,
  vuetify,
  pinia: createPinia(),
  render: () => h(App)
})
app.use(PiniaVuePlugin)

app.mount('#app')
