import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import home from '@/components/home'
import destination from '@/components/destination'
import information from '@/components/information'
import helper from '@/components/helper'
import mine from '@/components/mine'
Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/destination',
      name: 'destination',
      component: destination
    },
    {
      path: '/information',
      name: 'information',
      component: information
    },
    {
      path: '/helper',
      name: 'helper',
      component: helper
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})
