// eslint-disable-next-line no-unused-vars
class ExchangeRateModel{

    constructor() {
        if(ExchangeRateModel._instance){
            return ExchangeRateModel._instance;
        }
        ExchangeRateModel._instance = this;
        this.dateOfLastFetch = null;
        this.fetchLink = "https://api.exchangerate.host/latest";
        this.exchangeRate = null;
        this.daysBetweenFetches = 1;

    }

    static instance(){
        if(!ExchangeRateModel._instance){
            return new ExchangeRateModel();
        }
        else {
            return ExchangeRateModel._instance;
        }
    }


    /**
     * Fetches exchange rate if due. if not return already set exchange rate.
     * To be called in vue component
     * @returns {Promise<null>}
     */
    getExchangeRates(){
        if(this.exchangeRate == null || this.checkIfFetchIsDue(this.daysBetweenFetches)){
            this.exchangeRate = this.fetchExchangeRate()
        }
        return this.exchangeRate
    }


    /**
     * Returns if a fetch is necessary. Input is the number of days that should lie between polling.
     * @param timeBetweenFetches
     * @returns {boolean}
     */
    checkIfFetchIsDue(timeBetweenFetches){
        if(this.dateOfLastFetch == null){
            return true
        }
        let fetchDueDate = this.dateOfLastFetch.setDate(this.dateOfLastFetch.getDate() + timeBetweenFetches);
        let currentDate = Date.now()
        return currentDate > fetchDueDate;
    }

    /**
     * Returns the newest exchange rates if fetch was successful, other wises null. Also sets the lastFetch date
     * to prevent unnecessary traffic
     * @returns {Promise<null>}
     */
    async fetchExchangeRate() {
        let rates = null;
        try{
            // set time of fetch
            this.dateOfLastFetch = Date.now();
            rates = await fetch(this.fetchLink)
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