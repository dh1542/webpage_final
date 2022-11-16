<template>
  <NavBarComponent title="Dominik Hoffmann"></NavBarComponent>
  <div class="container">
    <div class="Toolbox">
      <h2 id="ERT-Header">Currency Converter</h2>
      <div class="input-section">
        <div class="input-field">
          <q-input rounded outlined type="number" v-model="amount" bg-color="white"/> 
        </div>
        <div class="currency-selector">
          <q-select filled bg-color="white" v-model="model" :options="currencies" label="Choose Currency">
             <template v-slot:option="scope">
                <q-item>
                <q-item-section>
                  <div class="currency-option">
                    <div class="ImageWrapper" :style="this.getFlagForCountry(scope.opt.country)">
                      
                    </div>
                  <q-item-label>{{ scope.opt.name }}</q-item-label>

                  <q-item-label>{{ scope.opt.sign }}</q-item-label>
                  </div>
                  
              </q-item-section>
              </q-item>
             </template> 
          </q-select>
        </div>
      </div>
      <div class="output-section">
      </div>
    </div>
  </div>
</template>
<script>
import NavBarComponent from "@/components/NavBarComponent.vue";

export default {
  name: "ExhangeRateTool",
  components: { NavBarComponent },
  data() {
    return {
      currencies: [
        {
          name: "United States Dollar",
          country: "US",
          currency: "USD",
          sign: "$"
        
        },
        {
          name: "Euro",
          country: "EU",
          currency: "EUR",
          sign: "€"
        },
        {
          name: "Russian Rubles",
          country: "RU",
          currency: "RUB",
          sign: "₽"
        },
        {
          name: "Chinese Renminbi",
          country: "CN",
          currency: "CNY",
          sign: "¥"
        },
        {
          name: "Japanese Yen",
          country: "JPN",
          currency: "JPY",
          sign: "¥"
        } 

      ]
    }
  },
  mounted() {
    console.log("home init");
  },
  methods: {
    getFlagForCountry(countryID){
      console.log(countryID)
      let style = {}
      let flagURL = "https://flagcdn.com/w40/"+ countryID  +".png";
      style.backgroundImage = "url('" +  flagURL +  "')";
      console.log(style)
      return style;
    }
  }
 
};
</script>
<style>
#ERT-Header {
    text-align: center;
    width: 40rem;
    background-color: #049a30;
    font-weight: 700;
    margin-left: auto; margin-right: auto;
    -webkit-text-stroke: 1.5px  white;
    border-radius: 5%;
    margin-top: 1%;
    

}
.container {
  margin-top: 5%;
  display: flex;
  justify-content: center;
}
.Toolbox {
  display: flex;
  
  flex-direction: column;
  
  height: 50rem;
  width: 100rem;
  background-image: url("https://www.publicdomainpictures.net/pictures/400000/nahled/image-16183020011ky.png");
  border-radius: 2%;
}
.input-section {
  display: flex;
    justify-content: space-evenly;
    padding-top: 2%;
    
    
    
    margin-left: auto; margin-right: auto;
}
.currency-selector{
  margin-left: 10px;
  width: 25rem;
}
.input-field{
  width: 20rem;
}
.currency-option{
  display: flex;
 align-content: flex-start;
 
}
.ImageWrapper{
  width: 20;
}

html{
  background-color: gainsboro;
}
</style>
