import Vue from 'vue';
import VueRouter from 'vue-router';
import Paginate from 'vuejs-paginate';
import ToggleButton from 'vue-js-toggle-button';
import {ValidationProvider, ValidationObserver} from 'vee-validate';
import {configure, extend} from 'vee-validate';
import {required} from 'vee-validate/dist/rules';
import VModal from 'vue-js-modal';
import VueSweetalert2 from 'vue-sweetalert2';
import 'cropperjs/dist/cropper.css';
import 'sweetalert2/dist/sweetalert2.min.css';

window.VeeValidateExtend = extend;

VeeValidateExtend('required', {
    ...required,
    message: 'The {_field_} field is required.'
});


window._ = require('lodash');
window.Vue = Vue;
global.VueRouter = window.VueRouter = VueRouter;
window.VeeValidate = require('vee-validate');
import 'froala-editor/js/plugins.pkgd.min.js';
//Import third party plugins

import VueFroala from 'vue-froala-wysiwyg';

Vue.use(VueFroala);

Vue.use(VueRouter);
Vue.use(ToggleButton);
Vue.use(VModal);
Vue.use(VueSweetalert2);
configure({
    classes: {
        valid: 'is-valid',
        invalid: 'is-invalid',
        dirty: 'is-dirty',
    }
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('pagination', Paginate);

/*
/!**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 *!/

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}*/

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.response.use((response) => {
    return response;
}, (error) => {

    if (typeof error.response.data.message != 'undefined') {

        Vue.swal({
            text: error.response.data.message,
            toast: true,
            position: 'top-end',
            icon: 'error',
            showConfirmButton: false,
        });
    }

    return Promise.reject(error);
});

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

Vue.prototype.$http = axios;
