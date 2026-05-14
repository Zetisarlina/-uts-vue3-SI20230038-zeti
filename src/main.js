import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import router from './router'

import highlight from './directives/highlight'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('highlight', highlight)

app.mount('#app')