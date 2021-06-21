import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTutorshipsComponent } from "./pages/tutor/list-tutorships/list-tutorships.component";
import { SeeSpecificWorkshipComponent } from "./pages/tutor/see-specific-workship/see-specific-workship.component";
import {AttendanceComponent} from "./pages/tutor/attendance/attendance.component";
import {MainTutorComponent} from "./pages/tutor/main-tutor/main-tutor.component";
import {AssistsComponent} from "./pages/coordinator/assists/assists.component";
import {OrganizetrainingComponent} from "./pages/coordinator/organizetraining/organizetraining.component";
import {OrganizeTrainingSelectGuestsComponent} from "./pages/coordinator/organize-training-select-guests/organize-training-select-guests.component";
import {ModifytrainingComponent} from "./pages/coordinator/modifytraining/modifytraining.component";

const routes: Routes = [
  {path:'tutor/:id', component: MainTutorComponent },
  { path: 'tutor/:id/tutorships', component: ListTutorshipsComponent },
  { path: 'tutor/:id/tutorships/:tutorshipId', component: SeeSpecificWorkshipComponent },
  { path: 'tutor/:id/tutorships/:tutorshipId/attendance', component: AttendanceComponent },
  { path: 'coordinator/:id/assitance', component: AssistsComponent },
  { path: 'coordinator/:id/trainings', component: OrganizetrainingComponent },
  { path: 'coordinator/:id/trainings/tutors', component: OrganizeTrainingSelectGuestsComponent },
  { path: 'coordinator/:id/trainings/a', component: ModifytrainingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
