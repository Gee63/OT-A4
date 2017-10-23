import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AgmCoreModule } from '@agm/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterializeModule } from 'angular2-materialize';
import { InViewportModule } from 'ng-in-viewport';


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
import { MobileMenuDirective } from './mobile-menu.directive';
import { DepartmentsComponentComponent } from './departments-component/departments-component.component';
import { DepartmentsDirectiveDirective } from './departments-directive.directive';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { ContactShowMapDirectiveDirective } from './contact-show-map-directive.directive';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { AuthServiceService } from './auth-service.service';


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
    MobileMenuComponentComponent,
    MobileMenuDirective,
    DepartmentsComponentComponent,
    DepartmentsDirectiveDirective,
    UploadFormComponent,
    ContactShowMapDirectiveDirective,
    AuthComponentComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterializeModule,
    InViewportModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),// imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features. database config its in environments
    AngularFireAuthModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponentComponent
      },
      {
        path: 'home',
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
      },
      {
        path: 'signin',
        component: AuthComponentComponent
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3gnMnMA7wLIBe8g7oBr3AqaUFMkhHcHI'
    })
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
