<template>
  <main id="app">
    <HomeView/>
  </main>
</template>

<script>
  import HomeView from "./views/HomeView.vue";

  export default {
    components: {
      HomeView
    }
  }
</script>

<style lang="scss">
  body {
    background: #121214;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  span {
    margin: 0;
  }
</style>
