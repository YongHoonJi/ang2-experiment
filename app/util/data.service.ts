import { Injectable, Inject } from '@angular/core';

import { Mock } from '../mock';
import { MockObjs } from '../mock-data';
import { APP_CONFIG, AppConfig } from '../app.config';

@Injectable()
export class DataService {
  endpoint = "";
  constructor(@Inject(APP_CONFIG) config: AppConfig ) {
    this.endpoint = config.apiEndpoint;
  }

  getMocks(): Mock[] {
    console.log("endpoint url : " + this.endpoint);
    return MockObjs;
  }

}
