<template>
   
        <NavBarComponent title="Dominik Hoffmann"></NavBarComponent>
        
        
   


</template>
<script>
import NavBarComponent from '@/components/NavBarComponent.vue';

    export default {
    name: 'HomeView',
    components: {  NavBarComponent },

    mounted () {
        console.log('home init')
    }
}

</script>
<style>

</style>