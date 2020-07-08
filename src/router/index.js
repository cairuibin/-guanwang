import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '.../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'PageView',
      component:()=>import('../views/PageView.vue') ,//resolve => require(['../view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        }, {
          path: '/home',
          name: 'home',
          component:()=>import('../views/HomePage.vue'),// resolve => require(['../view/HomePage'], resolve),
          meta: {
            title: '首页'
          }
        }, {
          path: '/software',
          name: 'software',
          component:()=>import('../views/Software.vue'),// resolve => require(['../view/Software'], resolve),
          meta: {
            title: '软件产品'
          },
          children: [
            // {
            //   path: '/software',
            //   redirect: '/software/smartTown'
            // },
            // {
            //   path: '/software/smartTown',
            //   name: 'software',
            //   component: resolve => require(['../view/Software_smartTown'], resolve),
            //   meta: {
            //     title: '软件产品丨智能小镇管理系统'
            //   }
            // },
            // {
            //   path: '/software/bigData',
            //   name: 'software',
            //   component: resolve => require(['../view/Software_bigData'], resolve),
            //   meta: {
            //     title: '软件产品丨大数据管理系统'
            //   }
            // }
          ]
        }, {
          path: '/service',
          name: 'service',
          component: ()=>import('../views/Service.vue'),//resolve => require(['../view/Service'], resolve),
          meta: {
            title: '相关服务'
          }
        }, {
          path: '/newsinformation',
          name: 'newsinformation',
          component:()=>import('../views/NewsInformation.vue'),// resolve => require(['../view/NewsInformation'], resolve),
          meta: {
            title: '新闻动态'
          }
        }, {
          path: '/companyintroduction',
          name: 'companyintroduction',
          component:()=>import('../views/CompanyIntroduction.vue'),// resolve => require(['../view/CompanyIntroduction'], resolve),
          meta: {
            title: '公司介绍'
          }
        }, {
          path: '/jobchance',
          name: 'jobchance',
          component:()=>import('../views/JobChance.vue'),// resolve => require(['../view/JobChance'], resolve),
          meta: {
            title: '工作机会'
          }
        }, {
          path: '/contactus',
          name: 'contactus',
          component:()=>import('../views/ContactUs.vue'),// resolve => require(['../view/ContactUs'], resolve),
          meta: {
            title: '联系我们'
          }
        },
        {
          path: '/servicedetail',
          name: 'servicedetail',
          component: ()=>import('../views/ServiceDetail.vue'),//resolve => require(['../view/ServiceDetail'],resolve),
          meta: {
            title: '相关服务'
          }
        }
      ]
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
