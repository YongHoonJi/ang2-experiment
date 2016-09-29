import { Injectable, Optional } from '@angular/core';

import { Mock } from '../mock';
import { MockObjs } from '../mock-data';
import { LoggerService } from '../util/logger.service';
import { DataService } from '../util/data.service';


@Injectable()
export class ListService {
  // what if this class is instantiated without logger? You justin use Optional decorator.
  constructor(@Optional() private logger: LoggerService, private dataService: DataService) {}

  getList(): Mock[] {
    return this.dataService.getMocks();
  }

}
