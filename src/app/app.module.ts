import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavTutorComponent } from './pages/tutor/main-nav-tutor/main-nav-tutor.component';
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { ListTutorshipsComponent } from './pages/tutor/list-tutorships/list-tutorships.component';
import { MainContentComponent } from './pages/coordinator/main-content/main-content.component';
import { MatButtonModule } from "@angular/material/button";
import { ListWorkshopsStudentComponent } from './pages/student/list-workshops-student/list-workshops-student.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { ConfirmDialogComponent } from './pages/student/confirm-dialog/confirm-dialog.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { PerformanceComponent } from './pages/tutor/performance/performance.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    AppComponent,
    MainNavTutorComponent,
    ListTutorshipsComponent,
    MainContentComponent,
    ListWorkshopsStudentComponent,
    ConfirmDialogComponent,
    PerformanceComponent,
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
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
