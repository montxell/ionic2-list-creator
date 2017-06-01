import { Component, OnInit } from '@angular/core';

import { ListService } from '../../app/services/list.service';

import { NavController } from 'ionic-angular';
import { DetailComponent } from '../detail/detail.component';



@Component({
  selector: 'app-done',
  templateUrl: 'done.component.html',
})
export class DoneComponent implements OnInit {

  show:boolean = false;

  constructor( private _listService: ListService,
               private navCtrl: NavController) {  }

  ngOnInit() {}


  seeDetail( list, index ) {
    this.navCtrl.push( DetailComponent, { list, index } );
  }

}
