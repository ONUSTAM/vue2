<template>
  <div id="headerNav">
    <nav class="navbar navbar-default">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>

      <div class="container-fluid">
        <a class="navbar-brand" href="#">Brand</a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a v-link="{ path: '/PlanList' }">PlanList</a></li>
          <li><a v-link="{ path: '/DeviceList' }">DeviceList</a></li>
          <li><a v-link="{ path: '/pageA' }">Link 1</a></li>
          <li><a v-link="{ path: '/pageB' }">Link 2</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>

  module.exports = {
    name: 'HeaderNav',
    props: {}
  }

</script>
