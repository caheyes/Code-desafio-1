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
  export default {
    props: {
      listaNoticias: {
        type: Array
      }
    },
    computed: {
      blogs() {
        return this.listaNoticias;
      }
    },
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