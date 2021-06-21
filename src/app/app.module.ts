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
    MatSelectModule
  ],
  providers: [TutorApiService, LessonStudentsApiService, LessonApiService],
  entryComponents: [ConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
