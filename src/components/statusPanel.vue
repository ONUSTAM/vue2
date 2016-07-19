<template>
  <!-- <div id="headerNav"> -->
  <div id="statusPanel">

    <pre>
      {{requestparams | json 2}}
    </pre>

  </div>
</template>
<script>

  module.exports = {
    name: 'StatusPanel',
    props: {
      requestparams: Object
    },
    data: function () {
      return {
        // requestparams: {}
      }
    },
    ready: function() {
      console.log('StatusPanel.ready');
    }
  }

</script>
