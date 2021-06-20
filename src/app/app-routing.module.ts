import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTutorshipsComponent } from "./pages/tutor/list-tutorships/list-tutorships.component";
import { SeeSpecificWorkshipComponent } from "./pages/tutor/see-specific-workship/see-specific-workship.component";
import {AttendanceComponent} from "./pages/tutor/attendance/attendance.component";
import {MainTutorComponent} from "./pages/tutor/main-tutor/main-tutor.component";

const routes: Routes = [
  {path:'tutor/:id', component: MainTutorComponent },
  { path: 'tutor/:id/tutorships', component: ListTutorshipsComponent },
  { path: 'tutor/:id/tutorships/:tutorshipId', component: SeeSpecificWorkshipComponent },
  { path: 'tutor/:id/tutorships/:tutorshipId/attendance', component: AttendanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
