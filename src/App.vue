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
  @import './variables/variaveis.css';
  @import './fonts/fonts.css';
  
  * {
    box-sizing: boder-box;
    padding: 0; 
    margin: 0;
  }

  body {
    background: #121214;
  }

  p {
    margin: 0;
    color: var(--title);
  }

  span {
    margin: 0;
  }

  .container {
    max-width: 1216px;
    margin: 0 auto;
    padding: 16px;
  }
</style>
