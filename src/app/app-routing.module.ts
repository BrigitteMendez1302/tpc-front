import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListTutorshipsComponent} from "./pages/tutor/list-tutorships/list-tutorships.component";
import {ReserveTutorialComponent1} from "./pages/reserve-tutorial-1/reserve-tutorial.component";
import {ReserveTutorialComponent2} from "./pages/reserve-tutorial-2/reserve-tutorial.component";
import {ReserveTutorialComponent3} from "./pages/reserve-tutorial-3/reserve-tutorial.component";
import {ProfileStudentComponent} from "./pages/profile-student/profile-student.component";
import {ProfileTutorComponent} from "./pages/profile-tutor/profile-tutor.component";
import {ReserveTutorialComponent4} from "./pages/reserve-tutorial-4/reserve-tutorial.component";
import {ProfileCoordinatorComponent} from "./pages/profile-coordinator/profile-coordinator.component";
import {AddScheduleComponent1} from "./pages/add-schedule-1/add-schedule.component";
import {AddScheduleComponent3} from "./pages/add-schedule-3/add-schedule.component";
import {EditScheduleComponent} from "./pages/edit-schedule/edit-schedule.component";
import {AddScheduleComponent2} from "./pages/add-schedule-2/add-schedule.component";

const routes: Routes = [
  { path: 'student/:id/tutorships/new1', component: ReserveTutorialComponent1 },
  { path: 'student/:id/tutorships/new2', component: ReserveTutorialComponent2 },
  { path: 'student/:id/tutorships/new3', component: ReserveTutorialComponent3 },
  { path: 'student/:id/tutorships/new4', component: ReserveTutorialComponent4 },
  { path: 'student/:id/profile', component: ProfileStudentComponent },
  { path: 'tutor/:id/profile', component: ProfileTutorComponent },
  { path: 'coordinator/:id/profile', component: ProfileCoordinatorComponent },
  { path: 'coordinator/:id/schedule', component: AddScheduleComponent1 },
  { path: 'coordinator/:id/schedule/options', component: AddScheduleComponent2 },
  { path: 'coordinator/:id/schedule/options/add', component: AddScheduleComponent3 },
  { path: 'coordinator/:id/schedule/options/edit', component: EditScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
