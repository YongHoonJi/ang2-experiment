import { Component } from '@angular/core';

import { LoggerService } from '../util/logger.service';
import { DataService } from '../util/data.service';
import { ListService } from './list.service';

let listServiceFactory = (logger: LoggerService, dataService: DataService) => {
  return new ListService(logger, dataService);
};

export let ListServiceProvider =
{
  provide: ListService,
  useFactory: listServiceFactory,
  deps: [ LoggerService, DataService ]
};
