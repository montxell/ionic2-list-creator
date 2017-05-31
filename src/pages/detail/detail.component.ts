import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { List, ListItem } from '../../app/classes/index';

import { ListService } from '../../app/services/list.service';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
})
export class DetailComponent implements OnInit {

  index:number;
  list:List;

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               public _listService: ListService) {

  this.index = this.navParams.get("index");
  this.list = this.navParams.get("list");

  }

  ngOnInit() {}


  updateItem( item:ListItem ) {
    item.completed = !item.completed

    this._listService.updateData();
  }
}
