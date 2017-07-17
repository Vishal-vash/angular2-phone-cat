import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Simulate Angular Web API Server using InMemoryAPi
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './data/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { CheckMarkFilter } from './custom/checkMark.filter';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { PhoneService } from './commons/services/phone.service';
import { UtilityService } from './commons/services/utility.service';

@NgModule({
  declarations: [
    //Contains Components/Directives and Pipes
    AppComponent,
    PhoneListComponent,
    PhoneDetailsComponent,
    DashboardComponent,
    CheckMarkFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    PhoneService,
    UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
