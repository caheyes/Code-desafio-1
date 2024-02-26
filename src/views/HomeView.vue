<template>
  <div>
    <HeaderView/>
    <ListaBlogs class="container" v-model:carregando="carregando" v-if="!carregando"/>
    <CarregandoPage v-else />
  </div>
</template>

<script>
  import HeaderView from './HeaderView.vue';
  import ListaBlogs from './ListaBlogs.vue';
  import CarregandoPage from '../components/CarregandoPage.vue';

  export default {
    components: {
      HeaderView,
      ListaBlogs,
      CarregandoPage
    },
    data() {
      return {
        carregando: null,
      }
    },
  }
</script>
