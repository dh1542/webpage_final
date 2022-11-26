// eslint-disable-next-line no-unused-vars
class ExchangeRateModel{

    constructor() {
        if(ExchangeRateModel._instance){
            return ExchangeRateModel._instance;
        }
        ExchangeRateModel._instance = this;
        this.dateOfLastFetch = null;
        this.fetchLink = "https://api.exchangerate.host/latest"

    }

    static instance(){
        if(!ExchangeRateModel._instance){
            return new ExchangeRateModel();
        }
        else {
            return ExchangeRateModel._instance;
        }
    }


    checkIfFetchIsDue(timeBetweenFetches){
        console.log(timeBetweenFetches)
        return this.dateOfLastFetch;
    }

    async fetchExchangeRate() {
        let rates = null;
        try{
             rates = await fetch('https://api.exchangerate.host/latest')
                .then(response => response.text())
                .then(text => JSON.parse(text))
                .then(data => {return data})

        }catch{
            console.warn("Fetching of exchange rates failed!! Converter will not work without!")
        }

        return rates







    }





}

export default ExchangeRateModel;