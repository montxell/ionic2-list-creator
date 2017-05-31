import { Component, OnInit } from '@angular/core';

import { ListService } from '../../app/services/list.service';

import { NavController } from 'ionic-angular';
import { AddComponent } from '../add/add.component';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-pendings',
  templateUrl: 'pendings.component.html',
})
export class PendingsComponent implements OnInit {

  constructor( private _listService: ListService,
               private navCtrl: NavController) {  }

  ngOnInit() {}

  goAdd() {
    this.navCtrl.push( AddComponent )
  }


  seeDetail( list, index ) {
    this.navCtrl.push( DetailComponent, { list, index } );
  }


}
