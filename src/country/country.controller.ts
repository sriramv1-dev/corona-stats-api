import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
    constructor(private countryService: CountryService) { }

    @Get('/getCountryDailyReportByName/:country/:date')
    async getCountryDailyReportByName(
        @Param('country') country: string,
        @Param('date') date: string
    ) {
        return await this.countryService.getCountryDailyReportByName(country, date);
    }

    @Get('/getLatestAllCountries')
    async getLatestAllCountries() {
        return await this.countryService.getLatestAllCountries();
    }

    @Get('/getLatestCountryDataByCode/:countryCode')
    async getLatestCountryDataByCode(@Param('countryCode') countryCode: string) {
        return await this.countryService.getLatestCountryDataByCode(countryCode);
    }

    @Get('/getLatestCountryDataByName/:countryName')
    async getLatestCountryDataByName(@Param('countryName') countryName: string) {
        return await this.countryService.getLatestCountryDataByName(countryName);
    }

    @Get('/getCountryDailyReportByCode/:countryCode/:date')
    async getCountryDailyReportByCode(
        @Param('countryCode') countryCode: string,
        @Param('date') date: string
    ) {
        return await this.countryService.getCountryDailyReportByCode(countryCode, date);
    }

    @Get('/getDailyReportAllCountries/:date')
    async getDailyReportAllCountries(@Param('date') date: string) {
        return await this.countryService.getDailyReportAllCountries(date);
    }

    // custom
    @Get('/getAllCountriesReportByDateRange/:startDate/:endDate')
    async getAllCountriesReportByDateRange(
        @Param('startDate') startDate: string,
        @Param('endDate') endDate: string
    ) {
        return await this.countryService
            .getAllCountriesReportByDateRange(startDate, endDate);
    }
}
