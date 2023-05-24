import Vue from 'vue';
import App from './App.vue';
import {hunhe,hunhe2} from './mixin'
Vue.config.productionTip-false;
Vue.mixin(hunhe)
Vue.mixin(hunhe2)
//创建vm
new Vue({
    el:'#app',
    render:h=>h(App)
})
