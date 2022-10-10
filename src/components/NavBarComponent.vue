<template>
  <q-layout view="hHh lpR fff" class="q-layout">
  <q-header reveal elevated class="bg-primary text-white" height-hint="98" >
    <q-toolbar>
      
      <q-toolbar-title align="center" class="toolbar-title">{{this.title}}</q-toolbar-title>
    </q-toolbar>
    <q-tabs align="center">
      <q-route-tab to="/" label="Home" />
      <q-route-tab to="/projects" label="Projects" />
      <q-route-tab to="/page3" label="Page Three" />
    </q-tabs>
  </q-header>
  </q-layout>
  <div class="content"></div>
</template>
<script>
export default {
  name: 'NavBarComponent',
  props: {
    title: String
  },
  mounted () {
    console.log(this.title)
  }
}
</script>
<style scoped>
.toolbar-title{
  padding-top: 2%;
  font-size: 200%;
 
}
.content{
  margin: 0;
  padding: 0;
  height: 500px;
  width: 500px;
  background-color: rebeccapurple;
}
.q-layout{
  margin: 0;
  padding: 0;
}
</style>
