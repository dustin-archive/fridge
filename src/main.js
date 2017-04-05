var Vue = require('vue')
var VueRouter = require('vue-router')
var Vuex = require('vuex')

Vue.use(VueRouter)
Vue.use(Vuex)

var router = new VueRouter({
  routes: [
    { path: '', redirect: '/home' },
    { path: '/home', component: require('./views/home/main.vue') },
    { path: '/communities', component: require('./views/communities/main.vue') },
    { path: '/faq', component: require('./views/faq/main.vue') },
    { path: '/jobs', component: require('./views/jobs/main.vue') },
    { path: '/merch', component: require('./views/merch/main.vue') },
    { path: '/statistics', component: require('./views/statistics/main.vue') },
    { path: '/admins', component: require('./views/admins/main.vue') }
  ]
})

var store = new Vuex.Store({
  modules: {

  }
})

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: function (h) {
    return h(require('./app/main.vue'))
  }
})
