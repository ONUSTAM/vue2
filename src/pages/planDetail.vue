<style lang="sass">
  .optionList {
    input[type="checkbox"] {

    }
    select {
      display: inline-block;
      width: 200px;
    }
  }
</style>

<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-8">
        <h3>Plan Detail</h3>
      </div>
      <div class="col-xs-4">
        <p><span class='glyphicon glyphicon-info-sign'></span> Context Link 1 : <a href="#">here</a></p>
        <p><span class='glyphicon glyphicon-info-sign'></span> Context Link 2 : <a href="#">here</a></p>
        <p><span class='glyphicon glyphicon-info-sign'></span> Context Link 3 : <a href="#">here</a></p>
      </div>
    </div>

    <div class="row optionList">
      <div class="col-xs-12 col-ms-6">
        <p>
          <span>option A</span>
          <input type="checkbox" id="optionA" value="true" v-model="optionA">
          <select class="form-control" v-model="selectedA" v-bind:disabled="!optionA">
            <option v-bind:selected="!optionA"> - </option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </p>
      </div>
      <div class="col-xs-12 col-ms-6">
        <p>
          <span>option B</span>
          <input type="checkbox" id="optionB" value="true" v-model="optionB">
          <select class="form-control" v-model="selectedB" v-bind:disabled="!optionB">
            <option v-bind:selected="!optionB"> - </option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </p>
      </div>
    </div>

    <hr>

    <div class="text-center">
      <p>
        <input type="checkbox" id="chk_agree" name="chk_agree" v-model="chkAgree">
        <label for="chk_agree">AGREE: {{chkAgree}}</label>
      </p>
      <div class="row">
        <p class="col-xs-6">
          <a class="btn btn-primary" v-bind:disabled="!chkAgree" v-link="{ path: '/DeviceList' }">BACK</a>
        </p>
        <p class="col-xs-6">
          <a class="btn btn-primary" v-bind:disabled="!chkAgree" v-link="{ path: '/DeviceList' }">NEXT</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    name: 'PlanDetail',
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
