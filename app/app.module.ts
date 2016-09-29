import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LoggerService } from './util/logger.service';
import { AdvancedLoggerService } from './util/advanced.logger.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ListComponent
  ],
  providers: [
    // Class provider with dependencies : provide extended AdvancedLogger
    { provide: LoggerService, useClass: AdvancedLoggerService }
  ],
  bootstrap: [
     AppComponent
  ]
})
export class AppModule{ }
