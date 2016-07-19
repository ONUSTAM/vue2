<style>
  .yellow {
    color: #f0f;
  }
</style>

<template>
  <h1 class="yellow">apge A</h1>
  <p>
    this page is A!!!
  </p>
  <p>
    msg = {{msg}}
  </p>
  <pre>
    {{items | json 2}}
  </pre>
  <input type="text" name="name" value="">
  <input type="tel" name="name" value="abc">

</template>

<script>
  // webpack.ProvidePluginがないと以下を追加しないとjqueryが使えません
  var moment = require('moment');

  (function(){
    var abc = _.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });
    console.log('lodash: ', abc);

    console.log('----');
    var clock1 = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log('moment: ', clock1);

    var clock2 = moment().format('YYYY / MM / DD  HH:mm:ss ddd');
    console.log('moment: ', clock2);
    console.log('/////');
  })()


  module.exports = {
    data: function () {
      return {
        msg: 'yes page A',
        items: ''
      }
    },
    ready: function() {
      this.getJson();
    },
    methods: {
      getJson: function() {
        var that = this;
        $.ajax(
          {
            type: 'GET',
            crossDomain: true,
            url: 'https://qiita.com/api/v2/items?page=1&per_page=5',
            dataType: 'json',
            success: function(json) {
              console.log(json);
              that.$data.items = json;
            },
            data: null
          }
        );
      }
    }
  }
</script>
