<template>
  <div class="ctn-pesquisa">
    <button class="btn-pesquisa" type="submit" @click="buscarBlog">
      <icone-item :icone="'search'" 
        :estilo="'color: #E07B67; font-size: 32px;'"
      ></icone-item>
    </button>
    <input type="search" placeholder="Pesquisar no blog" class="campo-pesquisa" v-model="valorPesquisa" @keyup.enter="buscarBlog">
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    data() {
      return {
        valorPesquisa: '',
        listaPesquisada: []
      }
    },
    computed: {
      ...mapState(['blogs']),
    },
    methods: {
      ...mapMutations(['GET_BLOGS']),
      ...mapActions(['listarBlogsPesquisados']),

      buscarBlog() {
        this.listarBlogsPesquisados(this.valorPesquisa);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ctn-pesquisa {
    position: relative;

    .btn-pesquisa {
      position: absolute;
      top: 30px;
      left: 30px;
      z-index: 11;
      border: none;
      background: transparent;
      outline: none;
      cursor: pointer;
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