import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import router from './router'
import store from './store'

Vue.prototype.axios = axios;
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vuex)

//路由跳转前
router.beforeEach(((to, from, next) => {
  let isLogin = sessionStorage.getItem('isLogin');

  //注销
  if (to.path == '/logout') {
    sessionStorage.clear();
    next({path: '/login'});
  } else if (to.path == '/login') {
    if (isLogin != null) {
      next({path: '/main'})
    }
  }else if (isLogin == null) {
    next({path: '/login'})
  }

  next();
}));

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
