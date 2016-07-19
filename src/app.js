var Vue = require('vue')
var VueRouter = require('vue-router')
var $ = require('jquery');
var _ = require('lodash');
var bootstrapSCSS = require('../styles/main.scss');

// var headerNav = Vue.extend(require('../src/components/headerNav.vue'));
var footerNav = Vue.extend(require('../src/components/footerNav.vue'));
var AddPlan = Vue.extend(require('../src/components/addPlan.vue'));
var PlanList = Vue.extend(require('../src/components/planList.vue'));
var DeviceList = Vue.extend(require('../src/components/deviceList.vue'));
var PageA = Vue.extend(require('../src/components/pageA.vue'));
var PageB = Vue.extend(require('../src/components/pageB.vue'));

Vue.use(VueRouter)
// Vue.component('header-nav', headerNav)
Vue.component('footer-nav', footerNav)
Vue.component('AddPlan', AddPlan)


var router = new VueRouter();

router.map({
  '/PlanList': {
    component: PlanList
  },
  '/DeviceList': {
    component: DeviceList
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

router.start(AddPlan, '#addPlan')
