<template>
    <NavBarComponent title="Projects"></NavBarComponent>
    /** content coming here */
    

</template>
<script>
    import NavBarComponent from '../components/NavBarComponent'
    //import FooterComponent from '../components/FooterComponent'
    export default {
    name: 'HomeView',
    components: { NavBarComponent },

    mounted () {
        console.log('home init')
    }
}

</script>
<style></style>