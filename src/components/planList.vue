<style lang="sass">
  .blue {
    color: #00f;
  }
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
        <p>Context Link 1 : <a href="#">here</a></p>
        <p>Context Link 2 : <a href="#">here</a></p>
        <p>Context Link 3 : <a href="#">here</a></p>
      </div>
    </div>

    <h5>Selection: {{ selection }}</h5>

    <div class="row">
      <div class="col-xs-6">
        <input type="radio" id="one" value="planA" v-model="selection">
        <label for="one" class="btn btn-default rdo_card">Plan A</label>
      </div>
      <div class="col-xs-6">
        <input type="radio" id="two" value="planB" v-model="selection">
        <label for="two" class="btn btn-default rdo_card">Plan B</label>
      </div>
    </div>

    <hr>

    <div v-if="selection === 'planA'">
      Plan A
    </div>
    <div v-if="selection === 'planB'">
      Plan B
      <p>
        <span>Checked names: {{ checkedNames | json }}</span>
      </p>
      <p>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
      </p>
      <p>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
      </p>
      <p>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
      </p>
    </div>
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
  var planList = {

  };
  module.exports = {
    data: function () {
      return {
        checkedNames: [],
        chkAgree: false,
        selection: planList.selection
      }
    },
    ready: function() {
      console.log('parent.requestParams: ', this.$parent.requestParams);
      planList = this.$parent.requestParams.planList;
      console.log('planList: ', planList.selection);
    }
  }
</script>
