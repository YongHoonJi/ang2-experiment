import { Injectable } from '@angular/core';

import { LoggerService }  from './logger.service';

@Injectable()
export class AdvancedLoggerService extends LoggerService {
  log(message: string) {
    console.log("[info] " + message);
  }
}
