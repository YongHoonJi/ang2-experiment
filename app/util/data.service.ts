import { Injectable } from '@angular/core';

import { Mock } from '../mock';
import { MockObjs } from '../mock-data';

@Injectable()
export class DataService {

  getMocks(): Mock[] {
    return MockObjs;
  }
}
