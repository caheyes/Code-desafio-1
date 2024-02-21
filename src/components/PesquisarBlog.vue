<template>
  <div class="ctn-pesquisa">
    <button class="btn-pesquisa" type="submit">
      <span class="material-symbols-outlined icone">search</span>
    </button>
    <input type="search" placeholder="Pesquisar no blog" class="campo-pesquisa">
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .ctn-pesquisa {
    position: relative;

    .btn-pesquisa {
      position: absolute;
      top: 15px;
      left: 15px;
      z-index: 10;
      border: none;
      background: transparent;
      outline: none;
      cursor: pointer;

      .icone {
        color: #E07B67;
        font-size: 32px;
      }
    }

    .campo-pesquisa {
      width: 100%;
      padding: 16px 24px 16px 55px;
      border-radius: 8px;
      border: 2px #252529 solid;
      background: #202024;
      font-size: 20px;
      color: #AFABB6;
      font-family: "Inter";
      outline: none;
    }
  }
</style>