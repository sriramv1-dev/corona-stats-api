import { Injectable, HttpService } from '@nestjs/common';
import { coronaApiURL, UrlPart } from '../app_Constants/constants';
import { headers } from './../../config'
import axios from 'axios';
var moment = require('moment');

@Injectable()
export class CountryService {
    constructor(private httpService: HttpService) { }

    async getCountryDailyReportByName(country: string, date: string) {
        const reportCountryByNameConfig = {
            headers: headers,
            params: {
                "date-format": "YYYY-MM-DD",
                format: "json",
                date: date,
                name: country
            }
        }
        const url = coronaApiURL + UrlPart.reportCountryByName;
        const response = await axios.get(url, reportCountryByNameConfig)
        if (!response) {
            console.log('No response received for GET Api Call');
        }
        return response.data;
    }

    async getLatestAllCountries() {
        const allCountriesConfig = {
            headers: headers,
            params: {
                format: "json",
            }
        }
        const url = coronaApiURL + UrlPart.allCountries;
        const response = await axios.get(url, allCountriesConfig)
        if (!response) {
            console.log('No response received for GET Api Call');
        }
        return response.data;
    }

    async getLatestCountryDataByCode(countryCode: string) {
        const CountryDataByCodeConfig = {
            headers: headers,
            params: {
                format: "json",
                code: countryCode
            }
        }
        const url = coronaApiURL + UrlPart.countryDataByCode;
        const response = await axios.get(url, CountryDataByCodeConfig)
        if (!response) {
            console.log('No response received for GET Api Call');
        }
        return response.data;
    }

    async getLatestCountryDataByName(country: string) {
        const CountryDataByNameConfig = {
            headers: headers,
            params: {
                format: "json",
                name: country
            }
        }
        const url = coronaApiURL + UrlPart.countryDataByName;
        const response = await axios.get(url, CountryDataByNameConfig)
        if (!response) {
            console.log('No response received for GET Api Call');
        }
        return response.data;
    }

    async getCountryDailyReportByCode(countryCode: string, date: string) {
        const CountryDataByCodeConfig = {
            headers: headers,
            params: {
                format: "json",
                "date-format": "YYYY-MM-DD",
                date: "2020-04-01",
                code: countryCode
            }
        }
        const url = coronaApiURL + UrlPart.reportCountryByCode;
        const response = await axios.get(url, CountryDataByCodeConfig)
        if (!response) {
            console.log('No response received for GET Api Call');
        }
        return response.data;
    }

    async getDailyReportAllCountries(date: string) {
        const allCountriesConfig = {
            headers: headers,
            params: {
                format: "json",
                "date-format": "YYYY-MM-DD",
                date: date
            }
        }
        const url = coronaApiURL + UrlPart.reportAllCountries;
        const response = await axios.get(url, allCountriesConfig)
        if (!response) {
            console.log('No response received for GET Api Call');
        }
        return response.data;
    }

    async getAllCountriesReportByDateRange(startDate: string, endDate: string) {
        // 2020-04-01
        const sDate = moment(startDate).format('MM-DD-YYYY');
        const eDate = moment(endDate).format('MM-DD-YYYY');
        const range = moment().range(sDate, eDate);
        const diff = range.diff('days');
        const array = range.toArray('days');
        array.forEach(element => {
            console.log(element)
        });
        const dateRange = [];
        return dateRange;

    }
}

