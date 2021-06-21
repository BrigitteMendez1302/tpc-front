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
import {MatTableModule} from '@angular/material/table';
import { ListTutorshipsComponent } from './pages/tutor/list-tutorships/list-tutorships.component';
import { SeeSpecificWorkshipComponent } from './pages/tutor/see-specific-workship/see-specific-workship.component';
import { AttendanceComponent } from './pages/tutor/attendance/attendance.component';
import { MainTutorComponent } from './pages/tutor/main-tutor/main-tutor.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LessonStudentsApiService } from './services/lesson-student-api.service';
import { HttpClientModule } from '@angular/common/http';
import { AssistsComponent } from './pages/coordinator/assists/assists.component';
import { MainNavCoordinatorComponent } from './pages/coordinator/main-nav-coordinator/main-nav-coordinator.component';
import { OrganizetrainingComponent } from './pages/coordinator/organizetraining/organizetraining.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { OrganizeTrainingSelectGuestsComponent } from './pages/coordinator/organize-training-select-guests/organize-training-select-guests.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";

import { ModifytrainingComponent } from './pages/coordinator/modifytraining/modifytraining.component';
import {CoordinatorComponent} from "./pages/coordinator/coordinator/coordinator.component";

@NgModule({
  declarations: [
    AppComponent,
    MainNavTutorComponent,
    ListTutorshipsComponent,
    SeeSpecificWorkshipComponent,
    AttendanceComponent,
    MainTutorComponent,
    AssistsComponent,
    MainNavCoordinatorComponent,
    OrganizetrainingComponent,
    OrganizeTrainingSelectGuestsComponent,
    CoordinatorComponent,
    ModifytrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatGridListModule,
    MatCheckboxModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonToggleModule
  ],
  providers: [LessonStudentsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
