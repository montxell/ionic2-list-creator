import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Services
import { ListService } from './services/list.service';

// Pipes
import { PlaceHolderPipe } from './pipes/placeholder.pipe';
import { PendingsPipe } from './pipes/pendings.pipe';


// Components / pages
import { TabsPage } from '../pages/tabs/tabs';

import { PendingsComponent } from '../pages/pendings/pendings.component';
import { DoneComponent } from '../pages/done/done.component';
import { AddComponent } from '../pages/add/add.component';
import { DetailComponent } from '../pages/detail/detail.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PlaceHolderPipe,
    PendingsPipe,
    TabsPage,
    PendingsComponent,
    DoneComponent,
    AddComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendingsComponent,
    DoneComponent,
    AddComponent,
    DetailComponent
  ],
  providers: [
    ListService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
