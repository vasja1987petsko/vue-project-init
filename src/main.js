// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

//import BootstrapVue from 'bootstrap-vue'//if need BootstrapVue
//import 'bootstrap/dist/css/bootstrap.css' //if don't use  in main.scss bootstrap.css
//import 'bootstrap-vue/dist/bootstrap-vue.css' //if need BootstrapVue

import './assets/style/_variables-bootstrap.scss';
import 'bootstrap/scss/bootstrap.scss';

import App from './App'
import router from './router'
import store from './store'

//Vue.use(BootstrapVue);//if need BootstrapVue

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue( {
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
} )
