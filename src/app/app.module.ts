import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavTutorComponent } from './pages/tutor/main-nav-tutor/main-nav-tutor.component';
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { ListTutorshipsComponent } from './pages/tutor/list-tutorships/list-tutorships.component';
import { SeeSpecificWorkshipComponent } from './pages/tutor/see-specific-workship/see-specific-workship.component';
import { AttendanceComponent } from './pages/tutor/attendance/attendance.component';
import { MainTutorComponent } from './pages/tutor/main-tutor/main-tutor.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavTutorComponent,
    ListTutorshipsComponent,
    SeeSpecificWorkshipComponent,
    AttendanceComponent,
    MainTutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
