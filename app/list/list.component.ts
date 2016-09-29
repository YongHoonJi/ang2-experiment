import { Component, OnInit }          from '@angular/core';
import { DataService }  from '../util/data.service';
import { LoggerService }  from '../util/logger.service';
import { Mock } from '../mock';

@Component({
  selector: 'my-list',
  templateUrl: 'app/list/list.component.html',
  providers : [
    DataService
  ]
})


export class ListComponent implements OnInit{
  constructor(private dataService: DataService, private logger: LoggerService){}

  mocks: Mock[];

  ngOnInit(): void {
    this.mocks = this.dataService.getMocks();
  }

  onClick(mock: Mock){
    this.logger.log(mock.name + " logging!!");
  }
}
