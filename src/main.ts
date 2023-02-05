import { createApp } from 'vue'
import {Quasar} from 'quasar'
import quasarLang from 'quasar/lang/fr'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'

import './assets/main.css'

createApp(App)
    .use(Quasar, {
        plugins: {},
        lang: quasarLang
    })
    .mount('#app')
