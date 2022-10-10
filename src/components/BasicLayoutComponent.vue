<template>
    <div class="q-pa-md">
    <q-layout class="q-layout" view="lHh lpr Fff">
      <q-header elevated class="bg-primary text-white">
        <q-toolbar>
          <q-toolbar-title align="center" class="toolbar-title">{{
            this.title
          }}</q-toolbar-title>
        </q-toolbar>
        <q-tabs align="center">
          <q-route-tab to="/" label="Home" />
          <q-route-tab to="/projects" label="Projects" />
          <q-route-tab to="/page3" label="Page Three" />
        </q-tabs>
      </q-header>
      <q-page-container>
        <q-page class="q-pa-md">
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>
        </q-page>
      </q-page-container>
      <q-footer  class='bg-primary text-white' height-hint='98'>
       

       <q-tabs align='center'>
         <q-route-tab to="/" label="Home" />
         <q-route-tab to="/projects" label="Projects" />
         <q-route-tab to="/page3" label="Page Three" />
       </q-tabs>
     </q-footer>
  
      

    </q-layout>
  </div>
</template>
<script>
    export default{
        name: 'BasicLayout',
        props: {
            title: String
        }
    }

    
</script>
<style>
.toolbar-title {
  padding-top: 2%;
  font-size: 200%;
}
</style>