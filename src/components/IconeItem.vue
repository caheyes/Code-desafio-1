<template>
  <span class="material-symbols-outlined" :style="estilo">{{ icone }}</span>
</template>

<script>
  export default {
    props: {
      icone: {
        type: String
      },
      estilo: {
        type: String
      }
    }
  }
</script>
