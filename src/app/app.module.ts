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
import { ListTutorshipsComponent } from './pages/tutor/list-tutorships/list-tutorships.component';
import { ReserveTutorialComponent1 } from './pages/reserve-tutorial-1/reserve-tutorial.component';
import {ReserveTutorialComponent2} from "./pages/reserve-tutorial-2/reserve-tutorial.component";
import { ReserveTutorialComponent3 } from './pages/reserve-tutorial-3/reserve-tutorial.component';
import { ReserveTutorialComponent4 } from './pages/reserve-tutorial-4/reserve-tutorial.component';
import { ProfileStudentComponent } from './pages/profile-student/profile-student.component';
import { ProfileTutorComponent } from './pages/profile-tutor/profile-tutor.component';
import { ProfileCoordinatorComponent } from './pages/profile-coordinator/profile-coordinator.component';
import { AddScheduleComponent1 } from './pages/add-schedule-1/add-schedule.component';
import { AddScheduleComponent2 } from './pages/add-schedule-2/add-schedule.component';
import { EditScheduleComponent } from './pages/edit-schedule/edit-schedule.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AddScheduleComponent3 } from './pages/add-schedule-3/add-schedule.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTooltipModule} from "@angular/material/tooltip";
import {HttpClientModule} from "@angular/common/http";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    MainNavTutorComponent,
    ReserveTutorialComponent2,
    ReserveTutorialComponent1,
    ReserveTutorialComponent3,
    ReserveTutorialComponent4,
    ProfileStudentComponent,
    ProfileTutorComponent,
    ProfileCoordinatorComponent,
    AddScheduleComponent1,
    AddScheduleComponent2,
    EditScheduleComponent,
    AddScheduleComponent3,
    ListTutorshipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatTooltipModule,
    MatSelectModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
