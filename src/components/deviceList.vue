<style lang="sass">
  #example-1 {
    h3 {
      word-wrap:break-word;
      overflow-wrap:break-word;
    }
  }
  .cardList {
    .wrap {
      border: solid 1px #ddd;
      border-radius: 2px;
      padding: 8px;
      margin: 4px 0;
      height: 320px;
    }
  }
</style>
<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 cardList" v-for="item in items">
        <div class="card card-block">
          <div class="wrap">
            <h4 class="card-title">{{ item.title }}</h3>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <p>
              {{ item.created_at }}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  var moment = require('moment');

  module.exports = {
    data: function () {
      return {
        items: ''
      }
    },
    ready: function() {
      this.getJson();
      console.log('parent: ', this.$parent.requestParams);
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
              that.$data.items = format(json);
            },
            data: null
          }
        );
      }
    }
  }

  function format (list){
    return _.map(list, function(value, key, object) {

      return {
        title: value.title,
        created_at: moment(value.created_at).format('YYYY/MM/DD HH:mm:ss ddd')
      }
    });
  }
</script>
