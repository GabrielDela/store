require('./bootstrap')

import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);

import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: require('./routes.js'),
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

Vue.component('spinner', require('vue-simple-spinner'));

const store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
        order: {},
        totalProducts: 0,
        req: axios.create({
            baseUrl: BASE_URL,
        }),
    },
    mutations: {
        updateProducts(state, products) {
            state.products = products;
        },
        updateCart(state, products) {
            state.cart = [];

            products.sort(function(a, b) {
                return (a.name).localeCompare(b.name);
            });

            if (products) {
                products.forEach(element => {
                    state.cart.push(element);
                });
            }
        },
    },
    actions: {
        updateOrder({ commit }, data) {
            this.state.order = data;
        },
        addOneFromCart({ commit }, data) {
            this.state.req
                .post("/api/cart/add/" + data.user_id + "/" + data.product_id)
                .then((response) => {
                    this.commit('updateCart', response.data);
                });
        },
        removeOneFromCart({ commit }, data) {
            this.state.req
                .post("/api/cart/remove/" + data.user_id + "/" + data.product_id)
                .then((response) => {
                    this.commit('updateCart', response.data);
                });
        },
        deleteFromCart({ commit }, data) {
            this.state.req
                .post("/api/cart/delete/" + data.user_id + "/" + data.product_id)
                .then((response) => {
                    this.commit('updateCart', response.data);
                });
        },
        clearCart({ commit }, data) {
            this.state.req
                .post("/api/cart/clear/" + data.user_id)
                .then((response) => {
                    this.commit('updateCart', response.data);
                });
        },
    }
});

import App from './App.vue';

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');