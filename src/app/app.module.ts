import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { CareersComponentComponent } from './careers-component/careers-component.component';
import { CultureComponentComponent } from './culture-component/culture-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';


@NgModule({
  declarations: [
    AppComponent,
    CareersComponentComponent,
    CultureComponentComponent,
    ContactComponentComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),// imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features. database config its in environmets
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponentComponent
      },
      {
        path: 'careers',
        component: CareersComponentComponent
      },
      {
        path: 'contact',
        component: ContactComponentComponent
      },
      {
        path: 'culture',
        component: CultureComponentComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

