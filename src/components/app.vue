<template>
  <div id="app">
    <!-- header -->
    <div id="header">
      <header-nav></header-nav>
    </div>

    <!-- main view -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>

    <pre>
      {{requestParams | json 2}}
    </pre>

    <footer-nav></footer-nav>

  </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        requestParams: {
          planList: {
            selection: 'Two',
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
