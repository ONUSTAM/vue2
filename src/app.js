var Vue = require('vue')
var VueRouter = require('vue-router')
var $ = require('jquery');
var _ = require('lodash');
var bootstrapSCSS = require('../styles/main.scss');

// var app = Vue.extend(require('../src/components/app.vue'));
// var App = Vue.extend({});
var App = Vue.extend(require('../src/components/app.vue'));
var headerNav = Vue.extend(require('../src/components/headerNav.vue'));
var BasicPlan = Vue.extend(require('../src/components/basicPlan.vue'));
var PageA = Vue.extend(require('../src/components/pageA.vue'));
var PageB = Vue.extend(require('../src/components/pageB.vue'));

Vue.use(VueRouter)
Vue.component('header-nav', headerNav)


var router = new VueRouter();

router.map({
  '/BasicPlan': {
    component: BasicPlan
  },
  '/pageA': {
    component: PageA
  },
  '/pageB': {
    component: PageB
  }
})



// router.redirect({
//   '*': '/pageA'
// })

router.start(App, '#app')
