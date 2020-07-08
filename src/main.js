import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* axios */
import axios from './api'
import api from './api/api'
Vue.prototype.http = axios;
Vue.prototype.api = api;

/* swiper */
import 'swiper/dist/css/swiper.min.css';

/* 重置样式 */
import './assets/css/reset.min.css'

/* bootstarp */
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'

/* animate.css */
import 'animate.css'

 
/* 头部组件 */
import Header from './components/Header'
Vue.component(Header.name,Header)


/* 尾部组件 */
import Footer from './components/Footer'
Vue.component(Footer.name,Footer)

/* 回到顶部 */
import GoTop from './components/GoTop'
Vue.component(GoTop.name,GoTop)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if(to.meta.title){
    document.title = to.meta.title
  }
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
