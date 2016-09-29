import { Component, OnInit }          from '@angular/core';
import { DataService }  from '../util/data.service';
import { ListService }  from './list.service';
import { ListServiceProvider } from './list.service.provider';
import { Mock } from '../mock';

@Component({
  selector: 'my-list',
  templateUrl: 'app/list/list.component.html',
  providers : [
    DataService, ListServiceProvider
  ]
})


export class ListComponent implements OnInit{

  constructor(private listService: ListService){}

  mocks: Mock[];

  ngOnInit(): void {
    this.mocks = this.listService.getList();
  }

  onClick(mock: Mock){
    console.log("clicked!");
  }

}
