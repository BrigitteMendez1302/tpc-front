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
  { path: 'tutorias', component: ListTutorshipsComponent },
  { path: 'tutorials-1', component: ReserveTutorialComponent1 },
  { path: 'tutorials-2', component: ReserveTutorialComponent2 },
  { path: 'tutorials-3', component: ReserveTutorialComponent3 },
  { path: 'tutorials-4', component: ReserveTutorialComponent4 },
  { path: 'profile/student', component: ProfileStudentComponent },
  { path: 'profile/tutor', component: ProfileTutorComponent },
  { path: 'profile/coordinator', component: ProfileCoordinatorComponent },
  { path: 'coordinator/schedule/new', component: AddScheduleComponent1 },
  { path: 'coordinator/schedule/new-2', component: AddScheduleComponent2 },
  { path: 'coordinator/schedule/new-3', component: AddScheduleComponent3 },
  { path: 'coordinator/schedule/edit', component: EditScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
