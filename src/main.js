import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import './assets/js/rem.js'
import './plugins/swiper.js'
import './plugins/popup/index.js'
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')