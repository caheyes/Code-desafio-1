<template>
  <section class="cards">
    <div class="card-blog" v-for="(blog, i) in blogs" :key="i">
      <div class="topo">
        <span class="data">{{ blog.data }}</span>
        <button @click="blog.curtido = !blog.curtido" class="btn-curtida">
          <icone-item :icone="'favorite'" 
            :estilo=" blog.curtido ? 'color: #E07B67; font-size: 32px; cursor: pointer;' : 
            'color: #fff; font-size: 32px; cursor: pointer;'"
          ></icone-item>
        </button>
      </div>
      <h2 class="titulo">{{ blog.titulo }}</h2>
      <p class="texto">{{ blog.texto }}</p>
    </div>
  </section>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    props: {
      carregando: {
        type: Boolean
      }
    },
    computed: {
      ...mapState(['blogs']),
    },
    mounted() {
      this.listarBlogs();
    },
    methods: {
      ...mapMutations(['GET_BLOGS', 'GET_BLOGS_LISTA_ORIGINAL']),
      // ...mapActions(['acaoExemploPuxarBlogs']), //caso eu fosse puxar uma action

      //get
      listarBlogs() {
        // this.$emit('update:carregando', true);

        let url = 'http://servicodados.ibge.gov.br/api/v3/noticias/';

        fetch(url)
          .then(async (res) => {
            const json = await res.json();
            let noticias = json.items.map(blog => ({
              id: blog.id,
              curtido: false,
              data: this.$formatarDataNomeMes(blog.data_publicacao),
              titulo: blog.titulo,
              texto: blog.introducao
            }));

            this.GET_BLOGS(noticias);
            this.GET_BLOGS_LISTA_ORIGINAL(noticias);
          })
          .catch(error => {
            console.error('Erro ao carregar os blogs:', error);
          })
          .finally(() => {
            // this.$emit('update:carregando', false);
          });
      }
    }
  }
</script>

<style lang="scss" scoped>
  $fontFamilyInter: 'Inter';

  .cards {
    display: flex;
    gap: 25px;
    flex-direction: column;
  }
  .card-blog {
    border: 2px #252529 solid;
    border-radius: 8px;
    padding: 40px;
    background: #17171A;

    .topo {
      display: flex;
      justify-content: space-between;
      align-content: center;
      margin-bottom: 18px;
      .btn-curtida {
        background: none;
        border: none;
      }
      .data {
        font-family: $fontFamilyInter;
        color: #E07B67;
        font-size: 16px;
      }
    }
    .titulo {
      font-size: 24px;
      font-family: $fontFamilyInter;
      color: #fff;
      font-weight: 500;
      margin-bottom: 18px;
    }
    .texto {
      font-size: 20px;
      font-family: $fontFamilyInter;
      color: #AFABB6;
    }
  }
</style>