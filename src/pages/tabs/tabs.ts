import { Component } from '@angular/core';

import { PendingsComponent } from '../pendings/pendings.component';
import { DoneComponent } from '../done/done.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendingsComponent;
  tab2Root = DoneComponent;

  constructor() {

  }
}
