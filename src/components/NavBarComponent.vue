<template>
   <div class="q-a-md">
    <q-toolbar class="bg-primary text-white  shadow-2">
      <q-btn flat round dense icon="menu" class="q-mr-sm" />
      <q-separator dark vertical inset />
      <q-btn  to="/" stretch flat label="Dominik Hoffmann" />

      <q-space />

      <ButtonComponent label="Tools" :routes="this.tool" ></ButtonComponent>
      <q-separator dark vertical />
      <ButtonComponent label="Games" :routes="this.game"></ButtonComponent>
      <q-separator dark vertical />
      <q-btn stretch flat label="Link" />
    </q-toolbar>
  </div>
</template>
<script>
import ButtonComponent from './ButtonComponent.vue';
export default {
    name: "NavBarComponent",
    //components: { ButtonComponent },
    data() {
        return {
            tool: new Map(),
            game: new Map()
        };
    },
    props: {
        title: String
    },
    mounted() {
      // init tools names and links
      this.tool.set("Calculator", "/calculator");
      this.tool.set("Exchange Rate", "/exchangeRate");

      // init game names and links
      this.game.set("Snake", "/snake");

    },
    components: { ButtonComponent }
}
</script>
<style scoped>
</style>
