import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`@/components/${component}.vue`)
}

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Items',
      component: load('Items')
    }
  ]
})
