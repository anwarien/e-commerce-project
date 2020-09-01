import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Example from './components/Example'
import Home from './components/Home'

new Vue({
    el: '#app', // where <div id="app"> in your DOM contains the Vue template
    components: {
        'example' : Example,
        'home' : Home
    },
    delimiters: ['${', '}$']
});
Vue.use(VueAxios, axios)
