import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dome1 from '@/components/demo1'
import Book from '@/components/book/book'
import Sel from '@/components/sel/Sel'
import Sel1 from '@/components/sel/Sel1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Demo',
      name: 'Dome1',
      component: Dome1
    },
    {
      path: '/Book',
      name: 'Book',
      component: Book
    },
    {
      path: '/Sel',
      name: 'Sel',
      component: Sel
    },{
      path: '/Sel1',
      name: 'Sel1',
      component: Sel1
    }
  ]
})
