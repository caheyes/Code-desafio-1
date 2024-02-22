<template>
  <div>
    <HeaderView/>
    <ListaBlogs class="container" :listaNoticias="blogs" v-if="!carregando"/>
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
        blogs: []
      }
    },
    mounted() {
      this.listarBlogs();
    },
    methods: {
      //busca
      pesquisarBlog() {

      },

      //get
      listarBlogs() {
        this.carregando = true;

        let url = 'http://servicodados.ibge.gov.br/api/v3/noticias/';

        fetch(url)
        .then((res) => res.json())
        .then(async (json) => {
          this.blogs = json.items.map(blog => ({
            id: blog.id,
            curtido: false,
            data: this.$formatarDataNomeMes(blog.data_publicacao), //'17 de ago, 2024'
            titulo: blog.titulo,
            texto: blog.introducao
          }))
        })
        .catch(error => {
          console.error('Erro ao carregar os blogs:', error);
        })
        .finally(() => {
          this.carregando = false;
        })
      }
    }
  }
</script>
