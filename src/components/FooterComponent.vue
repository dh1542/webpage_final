<template>
  <div>
    <q-layout view='hHh lpR fff'>
      <q-header reveal elevated class='bg-primary text-white' height-hint='98'>
        <q-toolbar>
          <q-toolbar-title> {{this.title}} </q-toolbar-title>
        </q-toolbar>

        <q-tabs align='left'>
          <q-route-tab to='/page1' label='Page One' />
          <q-route-tab to='/page2' label='Page Two' />
          <q-route-tab to='page3' label='Page Three' />
        </q-tabs>
      </q-header>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: "FooterComponent.vue",
  mounted () {
    console.log("init footer");
  },
};
</script>

<style scoped></style>
