import 'quasar/src/css/index.sass'
import { createApp } from 'vue'
import type { App } from 'vue'
import AppComponent from '@/App.vue'

const app: App = createApp(AppComponent)
app.mount('#app')
