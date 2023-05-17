import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'
import App from './App.vue'

import './assets/main.css'

const i18n = createI18n({
  locale: 'en',
  messages
})

console.log(messages)

const app = createApp(App)
app.use(i18n).mount('#app')
