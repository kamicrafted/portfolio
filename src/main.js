import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Load scss stylesheet
import "@/styles/style.scss"

// App-scoped component registration
// app.component('TodoDeleteButton', TodoDeleteButton)

// App init
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugin, defaultConfig)

app.mount('#app')