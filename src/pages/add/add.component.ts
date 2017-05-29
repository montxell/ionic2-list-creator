
import { Component, OnInit } from '@angular/core';

import { List, ListItem } from '../../app/classes/index';

@Component({
  selector: 'app-add',
  templateUrl: 'add.component.html',
})
export class AddComponent implements OnInit {

  listName:string;
  itemName:string="";

  items:ListItem[] = [];

  constructor() {  }

  ngOnInit() {}

  addItem() {
    if (this.itemName.length == 0) {
      return;
    }

    let item = new ListItem();
    item.name = this.itemName;

    this.items.push( item );
    this.itemName = "";

  }

  deleteItem( index:number ) {
    this.items.splice(index, 1);
  }


}
