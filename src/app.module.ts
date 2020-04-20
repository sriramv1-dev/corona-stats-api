import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TotalsModule } from './totals/totals.module';
import { CountryModule } from './country/country.module';

@Module({
  imports: [BooksModule, TotalsModule, CountryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
