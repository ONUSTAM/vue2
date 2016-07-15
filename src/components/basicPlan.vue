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
        <h3>BasicPlan</h3>
      </div>
      <div class="col-xs-4">
        <p>xxxxx 1 : <a href="#">here</a></p>
        <p>xxxxx 2 : <a href="#">here</a></p>
        <p>xxxxx 3 : <a href="#">here</a></p>
      </div>
    </div>
    <h5>Selection: {{ picked }}</h5>
    <div class="row">
      <div class="col-xs-6">
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one" class="btn btn-default rdo_card">One</label>
      </div>
      <div class="col-xs-6">
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two" class="btn btn-default rdo_card">Two</label>
      </div>
    </div>
    <div v-if="picked === One">
      one
    </div>
    <div v-if="picked === Tow">
      two
    </div>
  </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        // picked: 'Tow'
      }
    }
  }
</script>
