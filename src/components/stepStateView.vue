<template>
  <div id="stepState" class="container panel panel-default">
    <div class="panel-body dtbl">
      <div class="dtcl title">
        STEP
      </div>
      <div class="dtcl list">
        <div class="text-center col-xs-12 col-sm-2">
          <div class="stepIcon" v-bind:class="{'active': $route.path === '/PlanList'}">1</div>
          <div>Plan List</div></div>
        <div class="text-center col-xs-12 col-sm-2">
          <div class="stepIcon" v-bind:class="{'active': $route.path === '/DeviceList'}">2</div>
          <div>Device List</div></div>
        <div class="text-center col-xs-12 col-sm-2">
          <div class="stepIcon" v-bind:class="{'active': $route.path === '/PlanDetail'}">3</div>
          <div>Plan Detail</div></div>
        <div class="text-center col-xs-12 col-sm-2">
          <div class="stepIcon" v-bind:class="{'active': $route.path === '/UserInfoConfirm' || $route.path === '/UserInfoConfirmEdit'}">4</div>
          <div>UserInfo Confirm</div></div>
        <div class="text-center col-xs-12 col-sm-2">
          <div class="stepIcon" v-bind:class="{'active': $route.path === '/AddPlanConfirm'}">5</div>
          <div>AddPlan Confirm</div></div>
        <div class="text-center col-xs-12 col-sm-2">
          <div class="stepIcon" v-bind:class="{'active': $route.path === '/AddPlanCompletion'}">6</div>
          <div>AddPlan Completion</div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepState',
  props: {},
  data: function () {
    return {
    }
  }
}
</script>

<style lang="sass">
  .dtbl {
    display: table;

    .dtcl {
      display: table-cell;

      &.title {
        vertical-align: top;
      }
      &.list {
        width: 100%;
      }
    }
  }
  .stepIcon {
    border-radius: 50%;
    border: solid 1px #ddd;
    margin: auto;
    padding-top: 5px;
    text-align: center;
    height: 32px;
    width: 32px;
    &.active {
      background-color: #eee;
    }

  }
  .step-list{
    li {
    }
  }
</style>
