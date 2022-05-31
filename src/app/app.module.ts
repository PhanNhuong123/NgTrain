import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { StaffSearchComponent } from './staff-search/staff-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StaffDetailComponent,
    MessagesComponent,
    DashboardComponent,
    StaffSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService , { dataEncapsulation: false }
    )    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
