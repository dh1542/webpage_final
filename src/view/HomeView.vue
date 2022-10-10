<template>
    <BasicLayoutComponent title="Dominik Hoffmann"></BasicLayoutComponent>
    
</template>
<script>
    import BasicLayoutComponent from '../components/BasicLayoutComponent.vue'

    export default {
    name: 'HomeView',
    components: { BasicLayoutComponent },

    mounted () {
        console.log('home init')
    }
}

</script>
<style>

</style>