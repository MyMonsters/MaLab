import Vue from 'vue';
import App from './App.vue';
import 'aos/dist/aos.css';
import 'element-ui/lib/theme-chalk/index.css';
import request from './utils/request';
import { getUserInfo } from './utils/getUserInfo';
// import globalRegister from './global'
import { Carousel, CarouselItem } from 'element-ui';
Vue.use(Carousel).use(CarouselItem);
// Vue.use(CarouselItem);
require('./assets/css/styles.css');
// require("./assets/css/bootstrap.css");
require('./assets/css/bootstrap.min.css');
// require("./assets/css/hovereffects.css")

// require("./assets/fonts/iconfont.css")
import VueI18N from 'vue-i18n';
Vue.use(VueI18N);

const i18n = new VueI18N({
  locale: 'zh-CN',
  messages: {
    'zh-CN': require('./i18n/lang/zh'), // 中文语言包
    'en-US': require('./i18n/lang/en'), // 英文语言包
  },
});
//引入路由器
import VueRouter from 'vue-router';
import router from './router';
// globalRegister();
Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.prototype.axios = request;
getUserInfo();
new Vue({
  render: (h) => h(App),
  i18n: i18n,
  router: router,
}).$mount('#app');
