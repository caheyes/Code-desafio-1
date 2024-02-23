import { createStore } from 'vuex';

export default createStore({
  //é como o data()
  state: {
    blogs: [],
  },
  getters: {},
  mutations: {
    GET_BLOGS(state, payload) {
      state.blogs = payload;
    },
  },
  //poderia utilizar a ação igual um methods, mas é melhor fazer, quando essa ação é chamada em diversos lugares
  actions: {
    // acaoExemploPuxarBlogs(context) {
    //   let url = 'http://servicodados.ibge.gov.br/api/v3/noticias/';
    //     fetch(url)
    //     .then((res) => res.json())
    //     .then(async (json) => {
    //       let noticias = json.items.map(blog => ({
    //         id: blog.id,
    //         curtido: false,
    //         data: this.$formatarDataNomeMes(blog.data_publicacao), //'17 de ago, 2024'
    //         titulo: blog.titulo,
    //         texto: blog.introducao
    //       }));
    //       context.commit('GET_BLOGS', noticias); //para atualizar a mutation
    //       context.dispatch('outraAction', payload); //para chamar uma outra action já existente, assim posso mandar valores para ela
    //     })
    //     .catch(error => {
    //       console.error('Erro ao carregar os blogs:', error);
    //     })
    // }
  },
  modules: {},
});
