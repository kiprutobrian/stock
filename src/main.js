import Vue from 'vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import {
    routes
} from './routes';
import store from './store/store'

Vue.use(VueRouter);

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