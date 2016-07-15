var Vue = require('vue')
var VueRouter = require('vue-router')
var $ = require('jquery');
var _ = require('lodash');
var bootstrap = require('../styles/main.scss');

Vue.use(VueRouter)
var PageA = Vue.extend(require('../src/components/pageA.vue'));
var PageB = Vue.extend(require('../src/components/pageB.vue'));
var App = Vue.extend({});
var router = new VueRouter();

router.map({
  '/pageA': {
    component: PageA
  },
  '/pageB': {
    component: PageB
  }
})

router.redirect({
  '*': '/pageA'
})

router.start(App, '#app')
