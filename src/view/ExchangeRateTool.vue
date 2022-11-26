<template>
  <NavBarComponent title="Currency Converter"></NavBarComponent>
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
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps.valueOf()">
                <q-item-section style=" margin: 0; padding: 10px">
                  <img :src="this.getFlagForCountry(scope.opt.country)"
                       width="40"
                       height="30"
                       style="margin-right: auto; border: #1D1D1D solid 1px">
                </q-item-section>
                <q-item-section>

                  <q-item-label>{{ scope.opt.value }} <span
                      style="font-weight: bold; font-size: 150%">{{ scope.opt.sign }}</span></q-item-label>


                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
      </div>
      <div class="center-buttons button-section">
        <q-btn id="convert-button" push color="white" text-color="black" icon="autorenew" padding="lg" @click="convertAmount()"/>
        <q-btn id="switch-button" push color="white" text-color="black" icon="swap_vert" padding="lg" @click="switchCurrencies()"/>

      </div>
      <div class="output-section">
        <div class="input-field">
          <q-field filled rounded bg-color="white">
            <template v-slot:control>
              <div class="full-width ">{{convertedAmount}}</div>
            </template>

          </q-field>
        </div>
        <div class="currency-selector">
          <q-select filled bg-color="white"
                    v-model="toCurrencySelection"
                    :options="currencies"
                    :display-value="getDisplayValueTo()"
                    label="Choose Currency"
                    color="lightgrey"
                    options-selected-class="text-deep-orange"
          >
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps.valueOf()">
                <q-item-section style=" margin: 0; padding: 10px">
                  <img :src="this.getFlagForCountry(scope.opt.country)"
                       width="40"
                       height="30"
                       style="margin-right: auto; border: #1D1D1D solid 1px">
                </q-item-section>
                <q-item-section>

                  <q-item-label>{{ scope.opt.value }} <span
                      style="font-weight: bold; font-size: 150%">{{ scope.opt.sign }}</span></q-item-label>


                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import ExchangeRateModel from '../classes/exchangeRateModel'
import NavBarComponent from "@/components/NavBarComponent.vue";
import {ref} from 'vue'


export default {
  name: "ExhangeRateTool",
  components: {NavBarComponent},
  setup() {
    return {
      fromCurrencySelection: ref(null),
      toCurrencySelection: ref(null),
      amount: ref(null),
      convertedAmount: ref(null),

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
          value: "Chinese Yuan Renminbi",
          country: "cn",
          currency: "CNY",
          sign: "¥"
        },
        {
          value: "Japanese Yen",
          country: "jp",
          currency: "JPY",
          sign: "¥"
        },
        {
          value: "Polish Złoty",
          country: "pl",
          currency: "PLN",
          sign: "zł"
        },
        {
          value: "Hungarian Forint",
          country: "hu",
          currency: "HUF",
          sign: "Ft"
        },
        {
          value: "British Pound Sterling",
          country: "gb",
          currency: "GBP",
          sign: "£"
        }

      ]
    }
  },
  data() {
    return {
      exchangeRateModel: new ExchangeRateModel,
      unused: 0
    }
  },
  async mounted() {

    let exrm = await this.exchangeRateModel.getExchangeRates();

    console.log(exrm)
    console.log("home init");
  },
  methods: {
    getFlagForCountry(countryID) {
      return "https://flagcdn.com/w40/" + countryID + ".png";
    },
    getDisplayValue() {
      if (this.fromCurrencySelection == null) {
        return "Select Currency";
      } else {
        return this.fromCurrencySelection.value + " " + this.fromCurrencySelection.sign
      }
    },
    getDisplayValueTo() {
      if (this.toCurrencySelection == null) {
        return "Select Currency";
      } else {
        return this.toCurrencySelection.value + " " + this.toCurrencySelection.sign
      }
    },
    async convertAmount(){
      if(this.isConversionPossible()){
        this.convertedAmount = await this.exchangeRateModel.convertCurrencies(this.amount, this.fromCurrencySelection.currency, this.toCurrencySelection.currency)
      }
    },
    isConversionPossible(){
      return (this.amount != null && this.fromCurrencySelection != null && this.toCurrencySelection != null)
    },
    switchCurrencies(){
      let fromSelectionTemp = this.fromCurrencySelection
      this.fromCurrencySelection = this.toCurrencySelection
      this.toCurrencySelection = fromSelectionTemp
      if(this.isConversionPossible()){
        this.convertAmount()
      }
    }
  },
  watch: {
    fromCurrencySelection(selection) {
      if (selection != null) {
        console.log(selection.value)

      }
    }
  }

};
</script>
<style>
@import "../styles/currencyConverterStyle.css";

</style>
