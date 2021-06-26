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
//import { AttendanceComponent } from './pages/tutor/attendance/attendance.component';
import { MainTutorComponent } from './pages/tutor/main-tutor/main-tutor.component';
import { SeeLessonCommentsComponent } from './pages/coordinator/see-lesson-comments/see-lesson-comments.component';
import { SeeSpecificLessonCommentComponent } from './pages/coordinator/see-specific-lesson-comment/see-specific-lesson-comment.component';
import { SeeLessonOptionsComponent } from './pages/coordinator/see-lesson-options/see-lesson-options.component';
import {TutorApiService} from "./services/tutor-api.service";
import {HttpClientModule} from "@angular/common/http";
import { MainContentComponent } from './pages/coordinator/main-content/main-content.component';
import { ListWorkshopsStudentComponent } from './pages/student/list-workshops-student/list-workshops-student.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { ConfirmDialogComponent } from './pages/student/confirm-dialog/confirm-dialog.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { PerformanceComponent } from './pages/tutor/performance/performance.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { ReservationComponent } from './pages/student/list-reservations/reservation.component';
import { MainStudentComponent } from './pages/student/main-student/main-student.component';
import { LessonStudentsApiService } from './services/lesson-student-api.service';
import { LessonApiService } from './services/lesson-api.service';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {AttendanceComponent} from "./pages/tutor/attendance/attendance.component";
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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTooltipModule} from "@angular/material/tooltip";
import { AssistsComponent } from './pages/coordinator/assists/assists.component';
import { MainNavCoordinatorComponent } from './pages/coordinator/main-nav-coordinator/main-nav-coordinator.component';
import { OrganizetrainingComponent } from './pages/coordinator/organizetraining/organizetraining.component';
import { OrganizeTrainingSelectGuestsComponent } from './pages/coordinator/organize-training-select-guests/organize-training-select-guests.component';
import { ModifytrainingComponent } from './pages/coordinator/modifytraining/modifytraining.component';
import {CoordinatorComponent} from "./pages/coordinator/coordinator/coordinator.component";
import {CoordinatorService} from "./services/coordinator.service";
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavTutorComponent,
    ListTutorshipsComponent,
    SeeSpecificWorkshipComponent,
    //AttendanceComponent,
    MainTutorComponent,
    SeeLessonCommentsComponent,
    SeeSpecificLessonCommentComponent,
    SeeLessonOptionsComponent,
    MainContentComponent,
    ListWorkshopsStudentComponent,
    ConfirmDialogComponent,
    PerformanceComponent,
    AttendanceComponent,
    MainTutorComponent,
    MainStudentComponent,
    ReservationComponent,
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
    ListTutorshipsComponent,
    MainTutorComponent,
    AssistsComponent,
    MainNavCoordinatorComponent,
    OrganizetrainingComponent,
    OrganizeTrainingSelectGuestsComponent,
    CoordinatorComponent,
    ModifytrainingComponent,
    LoginComponent
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
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatGridListModule,
    MatCheckboxModule,
    HttpClientModule,
    MatSelectModule,
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
    NgxMaterialTimepickerModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonToggleModule
  ],
  providers: [CoordinatorService, TutorApiService, LessonStudentsApiService, LessonApiService, {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  entryComponents: [ConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
