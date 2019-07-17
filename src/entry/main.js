import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../views/App.vue'

import A from '../views/A.vue'
import B from '../views/B.vue'


// new Vue({
//   render: h => h(App)
// }).$mount('#app')

Vue.use(VueRouter)


const router =  new VueRouter({
  routes: [
    //一个个对象
    { path: '/a', component: A },
    { path: '/b', component: B }
  ]
})

new Vue({
  el: '#app',
  router: router,
  render: (h) => h(App)
})
