
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

import { List, ListItem } from '../../app/classes/index';

import { ListService } from '../../app/services/list.service';


@Component({
  selector: 'app-add',
  templateUrl: 'add.component.html',
})
export class AddComponent implements OnInit {

  listName:string = "";
  itemName:string = "";

  items:ListItem[] = [];

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public _listService: ListService
  ) {  }


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


  saveList() {
    if (this.listName.length == 0) {

      let alert = this.alertCtrl.create({
            title: 'Nombre de la lista (List name)',
            subTitle: 'El nombre de la lista es necesario (Name list required)',
            buttons: ['OK']
          });
          alert.present();
          return;
      }

      let list = new List( this.listName );
      list.items = this.items;

      this._listService.lists.push( list );
      this.navCtrl.pop();

    }



  }
