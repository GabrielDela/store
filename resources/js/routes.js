module.exports = [{
        path: '/',
        name: 'index',
        component: () =>
            import ('./pages/Index.vue')
    },
    {
        path: '/product/:slug',
        name: 'products.show',
        component: () =>
            import ('./pages/Show.vue')
    },
    {
        path: '/cart',
        name: 'order.cart',
        component: () =>
            import ('./pages/Cart.vue')
    },
    {
        path: '/checkout',
        name: 'order.checkout',
        component: () =>
            import ('./pages/Checkout.vue')
    },
    {
        path: '/summary',
        name: 'order.summary',
        component: () =>
            import ('./pages/Summary.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('./pages/Register.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('./pages/Login.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () =>
            import ('./pages/UserPage.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
            import ('./dashboard/Index.vue')
    }
];