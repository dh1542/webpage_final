<template>
    <NavBarComponent></NavBarComponent>
    <div class="calculator">
        <h3 id="header">Exchange Rate Calculator</h3>
        <p>Something</p>
     </div>
</template>
<script>


import NavBarComponent from '@/components/NavBarComponent.vue';
export default{


    name: 'ExchangeRateCalculatorView',
        components: { NavBarComponent },
        mounted () {
            console.log('home init')
        }
}
</script>
<style scoped>
    #header {
    
        position: relative;
        right: 20%;
        left: 10%;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .calculator{
        
        width: 60%;
        height: 40%;
        position: fixed;
        left: 20%;
        top: 10%;
        bottom: 50%;
        border: 4px solid grey;
    }
</style>
