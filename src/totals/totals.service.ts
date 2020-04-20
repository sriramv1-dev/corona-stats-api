import { Injectable, HttpService, Param } from '@nestjs/common';
import { coronaApiURL, config, UrlPart, headers } from '../app_Constants/constants'

@Injectable()
export class TotalsService {

    constructor(private httpService: HttpService) { }

    async getTotals() {
        const url = coronaApiURL + UrlPart.totals;
        return this.httpService.get(url, config)
            .toPromise()
            .then(res => res.data)
            .catch(err => { throw err })
    }

    async getDailyReportTotals(date: string) {
        const dailyReportConfig = {
            headers: headers,
            params: {
                "date-format": "YYYY-MM-DD",
                format: "json",
                date: date
            }
        }
        const url = coronaApiURL + UrlPart.dailyReportTotals;
        return this.httpService.get(url, dailyReportConfig)
            .toPromise()
            .then(res => res.data)
            .catch(err => { throw err })
    }
}
