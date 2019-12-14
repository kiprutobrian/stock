import Vue from 'vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import VueResource from 'vueresource';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import {
    routes 
} from './routes';
import store from './store/store'

Vue.use(VueRouter);
// Vue.use(VueResource);
Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString();
});

const router = new VueRouter({
    mode: 'history',
    routes
});


Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})
