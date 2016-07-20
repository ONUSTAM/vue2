var Vue = require('vue')
var VueRouter = require('vue-router')
var $ = require('jquery');
var _ = require('lodash');

// require("bootstrap-sass-loader");
// var bootstrapSCSS = require('../styles/main.scss');
require('../styles/main.scss');

// var headerNav = Vue.extend(require('../src/components/headerNav.vue'));
var footerNav = Vue.extend(require('../src/components/footerNav.vue'));
var AddPlan = Vue.extend(require('../src/components/addPlan.vue'));
var PlanList = Vue.extend(require('../src/pages/planList.vue'));
var PlanDetail = Vue.extend(require('../src/pages/planDetail.vue'));
var DeviceList = Vue.extend(require('../src/pages/deviceList.vue'));
var UserInfoConfirm = Vue.extend(require('../src/pages/userInfoConfirm.vue'));
var UserInfoConfirmEdit = Vue.extend(require('../src/pages/userInfoConfirmEdit.vue'));
var AddPlanConfirm = Vue.extend(require('../src/pages/addPlanConfirm.vue'));
var AddPlanCompletion = Vue.extend(require('../src/pages/addPlanCompletion.vue'));

Vue.use(VueRouter)
// Vue.component('header-nav', headerNav)
Vue.component('footer-nav', footerNav)
Vue.component('AddPlan', AddPlan)


var router = new VueRouter();

router.map({
  '/': {
    component: PlanList
  },
  '/PlanList': {
    component: PlanList
  },
  '/PlanDetail': {
    component: PlanDetail
  },
  '/DeviceList': {
    component: DeviceList
  },
  '/UserInfoConfirm': {
    component: UserInfoConfirm
  },
  '/UserInfoConfirmEdit': {
    component: UserInfoConfirmEdit
  },
  '/AddPlanConfirm': {
    component: AddPlanConfirm
  },
  '/AddPlanCompletion': {
    component: AddPlanCompletion
  }
})



// router.redirect({
//   '*': '/pageA'
// })

router.start(AddPlan, '#app')
