<style lang="sass">
  $small:  "only screen and (max-width:767px)";
  $middle: "only screen and (min-width:768px)";

  .mng-lay {
    @media #{$small} {
    }

    @media #{$middle} {
      display: table;

      .mng-lay__center {
        display: table-cell;
        width: 100%;
      }
      .mng-lay__right, .mng-lay__left {
        display: table-cell;
        width: 240px;
        max-width: 240px;
      }
    }
  }
</style>

<template>
  <div id="addPlan">
    <!-- header -->
    <header-nav></header-nav>
    <step-state :stepState="stepState"></step-state>

    <!-- main view -->
    <div class="container mng-lay">
      <router-view
        class="mng-lay__center"
        keep-alive
        transition
        transition-mode="out-in"
        :requestparams="requestparams"
        :userinfo="userinfo"
        >
      </router-view>

      <div class="mng-lay__right">
        <status-panel :requestparams="requestparams"></status-panel>
      </div>
    </div>

    <pre>
      {{requestparams | json 2}}
    </pre>

    <footer-nav></footer-nav>

  </div>
</template>

<script>
  var HeaderNav = require('../../src/components/headerNav.vue');
  var StepState = require('../../src/components/stepStateView.vue');
  var StatusPanel = require('../../src/components/statusPanel.vue');

  module.exports = {
    name: 'AddPlan',
    components: {
      HeaderNav,
      StatusPanel,
      StepState
    },
    data: function () {
      return {
        requestparams: {
          planList: {
            selection: null,
            hasSimCard: false,
            tel: null,
            passCode: null,
            entryCode: null,
            invitation: null
          },
          deviceList: {
            Id: null,
            title: null,
            color: null
          }
        },
        userinfo: {
          name: 'あいう　えお',
          name_katakana: 'アイウ　エオ',
          name_roman: 'aiu eo',
          dateOfBirth: '1982/08/08',
          gender: '男',
          address: '123-1234 東京都中野区１－１－１',
          phoneNumber: '031234567',
          faxNumber: '',
          phoneNumberInBusiness: '09012345678',
          mailAddress: 'xxxx@co.jp'
        },
        stepState: function () {
          console.log("::", this.$route.path);
          return this.$route.path
        }
      }
    },
    computed: {},
    ready: function () {},
    attached: function () {},
    methods: {}
  }

</script>
