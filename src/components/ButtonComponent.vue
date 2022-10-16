<template>
    <div>
      <q-btn-dropdown flat square  color="white" :label="this.label">
        <q-list v-for="(tool) in routes" :key="tool">
           
      
          
          
            <q-item clickable v-close-popup @click="onItemClick" :to=tool[1]>
            <q-item-section>
              <q-item-label>{{tool[0]}}</q-item-label>
            </q-item-section>
          </q-item>
  
  
          
        </q-list>
      </q-btn-dropdown>
    </div>
  </template>
<script>
export default{
    props:{
        label: String,
        routes: Map
    },
    mounted(){
        console.log(this.routes)
    },
    methods:{
        getMapValue(key){
            return Array.from(this.routes.keys())[key];
        }
    }
    
}

</script>

<style>

</style>