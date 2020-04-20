import { headers } from './../../config'

export const coronaApiURL = 'https://covid-19-data.p.rapidapi.com/';

export const config = {
    params: {
        format: 'json'
    },
    headers: headers,
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