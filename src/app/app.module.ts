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
//import { AttendanceComponent } from './pages/tutor/attendance/attendance.component';
import { MainTutorComponent } from './pages/tutor/main-tutor/main-tutor.component';
import { SeeLessonCommentsComponent } from './pages/coordinator/see-lesson-comments/see-lesson-comments.component';
import { SeeSpecificLessonCommentComponent } from './pages/coordinator/see-specific-lesson-comment/see-specific-lesson-comment.component';
import { SeeLessonOptionsComponent } from './pages/coordinator/see-lesson-options/see-lesson-options.component';
import {TutorApiService} from "./services/tutor-api.service";
import {HttpClientModule} from "@angular/common/http";

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
    SeeLessonOptionsComponent
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
    HttpClientModule
  ],
  providers: [TutorApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
