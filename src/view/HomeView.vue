<template>
    <NavBarComponent title="Dominik Hoffmann" class='nav-bar'></NavBarComponent>
    <ContentComponent></ContentComponent>
    
</template>
<script>
    import NavBarComponent from '../components/NavBarComponent'
    
    import ContentComponent from '../components/ContentComponent'
    export default {
    name: 'HomeView',
    components: { NavBarComponent, ContentComponent },

    mounted () {
        console.log('home init')
    }
}

</script>
<style>
.nav-bar{
    padding-bottom: 0;
}
</style>