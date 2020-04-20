export const coronaApiURL = 'https://covid-19-data.p.rapidapi.com/';

export const headers = {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    "x-rapidapi-key": "b035da17cemshb21f18440289dc6p153f30jsn2a39946a4c38"
}

export const config = {
    headers: headers,
    params: {
        format: 'json'
    }
}

export const UrlPart = {
    totals: 'totals',
    dailyReportTotals: 'report/totals',
    reportCountryByName: 'report/country/name',
    reportCountryByCode: 'report/country/code',
    reportAllCountries: 'report/country/all',
    allCountries: 'country/all',
    countryDataByCode: 'country/code',
    countryDataByName: 'country'
}

export const CountryCode = {
    ITALY: 'it'
}

export const CountryCodes = {

}