<script setup>
  import Mensagem from "@/componentes/mensagem.vue";
  import Usuario from "./componentes/Usuario.vue";
  export default {
    name: "App",
    components: {
      Mensagem,
    },
    data() {
      return {
        idadeUser: 10
      }
    }
  }
</script>

<template>
  <h1>Valores Entre Componentes</h1>
  <Mensagem :idade="idadeUser"></Mensagem>
</template>

<style scoped>

</style>
