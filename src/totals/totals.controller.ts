import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';

import { TotalsService } from './totals.service';

@Controller('corona')
export class TotalsController {
    constructor(private totalsService: TotalsService) { }

    @Get('/getTotals')
    async getTotals() {
        const totals = await this.totalsService.getTotals();
        return totals;
    }

    @Get('/getDailyReportTotals/:date')
    async getDailyReportTotals(@Param('date') date: string) {
        const dailyReportTotals = await this.totalsService.getDailyReportTotals(date);
        return dailyReportTotals;
    }
}

