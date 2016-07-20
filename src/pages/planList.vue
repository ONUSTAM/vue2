<style lang="sass">
  input[type="radio"] {
    display: none;
  }
  .rdo_card {
    display: inline-block;
    width: 100%;
    height: 40px;
    box-shadow: 0 0 4px rgba(0, 0, 0, .2);
  }
</style>

<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-8">
        <h3>PlanList</h3>
      </div>
      <div class="col-xs-4">
        <p><span class='glyphicon glyphicon-info-sign'></span> Context Link 1 : <a href="#">here</a></p>
        <p><span class='glyphicon glyphicon-info-sign'></span> Context Link 2 : <a href="#">here</a></p>
        <p><span class='glyphicon glyphicon-info-sign'></span> Context Link 3 : <a href="#">here</a></p>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-6">
        <input type="radio" id="planA" value="planA" v-model="requestparams.planList.selection">
        <label for="planA" class="btn btn-default rdo_card"
          v-bind:class="{'active': requestparams.planList.selection === 'planA'}">Plan A</label>
      </div>
      <div class="col-xs-6">
        <input type="radio" id="planB" value="planB" v-model="requestparams.planList.selection">
        <label for="planB" class="btn btn-default rdo_card"
          v-bind:class="{'active': requestparams.planList.selection === 'planB'}">Plan B</label>
      </div>
    </div>

    <hr>

    <div v-if="requestparams.planList.selection === 'planA'">
      <h3>Plan A</h3>
    </div>

    <div v-if="requestparams.planList.selection === 'planB'">
      <h3>Plan B</h3>

      <div class="row">
        <div class="col-xs-6">
          <input type="radio" id="hasSimCardTrue" value="true" v-model="requestparams.planList.hasSimCard">
          <label for="hasSimCardTrue" class="btn btn-default rdo_card"
            v-bind:class="{'active': requestparams.planList.hasSimCard === 'true'}">SIMカードあり</label>
        </div>
        <div class="col-xs-6">
          <input type="radio" id="hasSimCardFalse" value="false" v-model="requestparams.planList.hasSimCard">
          <label for="hasSimCardFalse" class="btn btn-default rdo_card"
            v-bind:class="{'active': requestparams.planList.hasSimCard === 'false'}">SIMカードなし</label>
        </div>
      </div>

      <hr>

      <div v-if="requestparams.planList.hasSimCard === 'true'">
        <h3>hasSimCardTrue</h3>
        <p><input type="tel" name="tel" value="" class="form-control" placeholder="(11桁)08012345678" v-model="requestparams.planList.tel"></p>
        <p><input type="text" name="passCode" value="" class="form-control" placeholder="http:/" v-model="requestparams.planList.passCode"></p>
      </div>

      <div v-if="requestparams.planList.hasSimCard === 'false'">
        <h3>hasSimCardFalse</h3>
        <p><input type="text" name="entryCode" class="form-control" placeholder="Entry Code" v-model="requestparams.planList.entryCode"></p>
      </div>
    </div>

    <div>
      <h3>Invitation</h3>
      <p><input
        type="text"
        name="invitation"
        class="form-control"
        placeholder="Please enter"
        v-model="requestparams.planList.invitation"
        ></p>
    </div>

    <hr>

    <div class="text-center">
      <p>
        <input type="checkbox" id="chk_agree" name="chk_agree" v-model="chkAgree">
        <label for="chk_agree">AGREE: {{chkAgree}}</label>
      </p>
      <p>
        <a class="btn btn-primary" v-bind:disabled="!chkAgree" v-link="{ path: '/DeviceList' }">NEXT</a>
      </p>
    </div>
  </div>
</template>

<script>
  module.exports = {
    name: 'PlanList',
    props: {
      requestparams: Object
    },
    computed: {
      // selection () {
      //   console.log('PlanList.selection');
      //   // return this.requestparams.planList.selection
      //   return this.$data.selectionA = this.requestparams.planList.selection
      // },
    },
    ready: function() {
      console.log('PlanList.ready');
    },
    data: function () {
      return {
        chkAgree: false,
        planA: true
      }
    }
  }
</script>
