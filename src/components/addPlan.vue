<style lang="sass">
  .mng-lay {
    display: table;

    .plC {
      display: table-cell;
      width: 100%;
    }
    .plR {
      display: table-cell;
      width: 180px;
    }
  }
</style>

<template>
  <div id="app">
    <!-- header -->
    <div id="header">
      <header-nav></header-nav>
    </div>

    <!-- main view -->
    <div class="container mng-lay">
      <router-view
        class="plC"
        keep-alive
        transition
        transition-mode="out-in"
        :requestparams="requestparams"
        >
      </router-view>
      <div class="plR">
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
  var StatusPanel = require('../../src/components/statusPanel.vue');

  module.exports = {
    name: 'AddPlan',
    components: {
      HeaderNav,
      StatusPanel
    },
    data: function () {
      return {
        requestparams: {
          planList: {
            selection: 'planB',
          },
          deviceList: {
            Id: null,
            title: null,
            color: null
          }
        }
      }
    }
  }

</script>
