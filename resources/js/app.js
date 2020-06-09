require('./bootstrap');

import {routes} from './routes.js';
import PageHeader from './vue/layouts/page-header';

const router = new VueRouter({routes, linkActiveClass: 'active'});

Vue.component('page-header', PageHeader);

router.beforeEach((to, from, next) => {

    if (typeof to.meta.permission != 'undefined') {
        axios.get(`/api/admin/v1/check-permissions`, {params: {permission: to.meta.permission}})
            .then(response => {
                if (response.data.allow === true) {
                    next();
                } else {
                    next({path: '/404'});
                }
            });
    } else {

        next();
    }

});

const app = new Vue({
    router,
    methods: {
        logout() {
            document.getElementById('logoutForm').submit();
        },
        isRouteMatchesAny(routes = []) {
            return this.$route.matched.some(({name}) => _.includes(routes, name));
        }
    }
}).$mount('#app');
