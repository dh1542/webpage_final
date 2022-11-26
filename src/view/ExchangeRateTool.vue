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
          <q-select filled bg-color="white"
                    v-model="fromCurrencySelection"
                    :options="currencies"
                    :display-value="getDisplayValue()"
                    label="Choose Currency"
                    color="lightgrey"
                    options-selected-class="text-deep-orange"
                   >
             <template v-slot:option="scope" >
                <q-item v-bind="scope.itemProps.valueOf()" >
                <q-item-section style=" margin: 0; padding: 10px">
                  <img :src="this.getFlagForCountry(scope.opt.country)"
                         width="40"
                         height="30"
                         style="margin-right: auto; border: #1D1D1D solid 1px">
                </q-item-section>
                <q-item-section>

                  <q-item-label >{{ scope.opt.value }} <span style="font-weight: bold; font-size: 150%">{{scope.opt.sign}}</span></q-item-label>



                  
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
import ExchangeRateModel from '../classes/exchangeRateModel'
import NavBarComponent from "@/components/NavBarComponent.vue";
import { ref } from 'vue'
export default {
  name: "ExhangeRateTool",
  components: { NavBarComponent },
  setup() {
      return{
        fromCurrencySelection: ref(null),
        amount: 0,

        currencies: [
          {
            value: "United States Dollar",
            country: "us",
            currency: "USD",
            sign: "$"

          },
          {
            value: "Euro",
            country: "eu",
            currency: "EUR",
            sign: "€"
          },
          {
            value: "Russian Rubles",
            country: "ru",
            currency: "RUB",
            sign: "₽"
          },
          {
            value: "Chinese Renminbi",
            country: "cn",
            currency: "CNY",
            sign: "¥"
          },
          {
            value: "Japanese Yen",
            country: "jp",
            currency: "JPY",
            sign: "¥"
          }

        ]
      }
  },
  data() {
    return {
        exchangeRateModel : new ExchangeRateModel,
        unused: 0
    }
  },
  async mounted() {

    let exrm = await this.exchangeRateModel.getExchangeRates();

    console.log(exrm)
    console.log("home init");
  },
  methods: {
    getFlagForCountry(countryID){
      return "https://flagcdn.com/w40/"+ countryID  +".png";
    },
    getDisplayValue(){
      if(this.fromCurrencySelection == null){
        return "Select Currency";
      }
      else{
        return this.fromCurrencySelection.value + " " + this.fromCurrencySelection.sign
      }
    }
  },
  watch: {
    fromCurrencySelection(selection){
      if(selection != null){
        console.log(selection.value)

      }
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


html{
  background-color: gainsboro;
}
</style>
