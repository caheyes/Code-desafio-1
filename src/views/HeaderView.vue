<template>
  <div class="header">
    <LogoMarca class="logo"/>
  </div>
</template>

<script>
  import LogoMarca from '../components/LogoMarca.vue';

  export default {
    components: {
      LogoMarca
    }
  }
</script>

<style lang="scss">
  .header {
    width: 100%;
    background: #17171A;
    padding: 40px 0;

    .logo {
      display: flex;
      justify-content: center;
    }
  }
</style>