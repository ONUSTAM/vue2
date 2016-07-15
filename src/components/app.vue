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
  </div>
</template>
