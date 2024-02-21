<template>
  <div class="header">
    <LogoMarca class="logo"/>
    <PesquisarBlog class="container"/>
  </div>
</template>

<script>
  import LogoMarca from '../components/LogoMarca.vue';
import PesquisarBlog from '../components/PesquisarBlog.vue';

  export default {
    components: {
      LogoMarca,
      PesquisarBlog
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    background: #17171A;
    padding: 60px 0;

    .logo {
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
    }
  }
</style>