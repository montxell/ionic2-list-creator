import { Component, OnInit } from '@angular/core';

import { ListService } from '../../app/services/list.service';

@Component({
  selector: 'app-pendings',
  templateUrl: 'pendings.component.html',
})
export class PendingsComponent implements OnInit {

  constructor( private _listService: ListService ) {  }

  ngOnInit() {}
}
