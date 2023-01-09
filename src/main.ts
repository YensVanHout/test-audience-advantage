import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'

import './assets/main.scss'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(PiniaVuePlugin)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
    pinia: createPinia(),
    render: (h) => h(App),
}).$mount('#app')
