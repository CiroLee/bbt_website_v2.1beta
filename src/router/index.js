import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Main from '@/components/main';
import Article from '@/components/Articles';
import Home from '@/components/home';
import ErrorTip from '@/components/errorTip';
import ArticleList from '@/components/articleList';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children:[
        {
          name:'home',
          path:'home',
          component:Home
        },
        {
          name:'article',
          path:'article',
          component:Article
        },
        {
          name:'articlelist',
          path:'articlelist',
          component:ArticleList
        }
      ]
    }
  ]
})
