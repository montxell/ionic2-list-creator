import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

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
               public alertCtrl: AlertController,
               public _listService: ListService) {

  this.index = this.navParams.get("index");
  this.list = this.navParams.get("list");

  }

  ngOnInit() {}


  updateItem( item:ListItem ) {
    item.completed = !item.completed

    this._listService.updateData();
  }


  deleteListItems() {

    let confirm = this.alertCtrl.create({
      title: this.list.name,
      message: '¿Está seguro/a que desea eliminar la lista? (Are you sure you want to delete the list?)',
      buttons: [
        {
          text: 'Cancelar (Cancel)',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Eliminar (Delete)',
          handler: () => {
            console.log('Delete clicked');
            this._listService.deleteList(this.index);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }



}
