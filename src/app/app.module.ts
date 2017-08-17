import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AgmCoreModule } from '@agm/core';

/*component additions*/
import { AppComponent } from './app.component';
import { CareersComponentComponent } from './careers-component/careers-component.component';
import { CultureComponentComponent } from './culture-component/culture-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { NavigationComponentComponent } from './navigation-component/navigation-component.component';
import { WhatWeDoComponentComponent } from './what-we-do-component/what-we-do-component.component';
import { MobileMenuComponentComponent } from './mobile-menu-component/mobile-menu-component.component';


@NgModule({
  declarations: [
    AppComponent,
    CareersComponentComponent,
    CultureComponentComponent,
    ContactComponentComponent,
    HomeComponentComponent,
    AdminComponentComponent,
    NavigationComponentComponent,
    WhatWeDoComponentComponent,
    MobileMenuComponentComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),// imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features. database config its in environments
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
      },
      {
        path: 'whatwedo',
        component: WhatWeDoComponentComponent
      },
      {
        path: 'admin',
        component: AdminComponentComponent
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3gnMnMA7wLIBe8g7oBr3AqaUFMkhHcHI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


