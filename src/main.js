/*
 * @Author: ken yang
 * @Date: 2021-11-08 16:05:42
 * @LastEditTime: 2021-11-09 09:06:33
 * @LastEditors: ken yang
 * @Description: 
 * @FilePath: \vue-cli3-npm-package\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import card from 'card'

Vue.use(card)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
