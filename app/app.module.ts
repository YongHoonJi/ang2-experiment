import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LoggerService } from './util/logger.service';
import { AdvancedLoggerService } from './util/advanced.logger.service';
import { APP_CONFIG, GLOBAL_APP_CONFIG } from './app.config';

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
    // Not aliased! Creates two instances of `NewLogger`
    { provide: LoggerService, useClass: AdvancedLoggerService },
    { provide: APP_CONFIG, useValue: GLOBAL_APP_CONFIG }
    // Alias OldLogger w/ reference to NewLogger
    //{ provide: loggerAlias, useClass: AdvancedLoggerService }
  ],
  bootstrap: [
     AppComponent
  ]
})
export class AppModule{ }
