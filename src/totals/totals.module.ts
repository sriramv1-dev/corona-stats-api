import { Module, HttpModule } from '@nestjs/common';
import { TotalsController } from './totals.controller';
import { TotalsService } from './totals.service';

@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),],
  controllers: [TotalsController],
  providers: [TotalsService]
})
export class TotalsModule { }
