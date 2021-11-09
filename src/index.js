/*
 * @Author: ken yang
 * @Date: 2021-11-08 16:09:26
 * @LastEditTime: 2021-11-09 09:06:29
 * @LastEditors: ken yang
 * @Description: 插件封装入口文件
 * @FilePath: \vue-cli3-npm-package\src\index.js
 */
import card from './components/card.vue'
import HelloWorld from './components/HelloWorld.vue'

const components = [
  card,
  HelloWorld
]
const install = function (Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {install}