import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListTutorshipsComponent} from "./pages/tutor/list-tutorships/list-tutorships.component";
import {MainContentComponent} from "./pages/coordinator/main-content/main-content.component";
import {PerformanceComponent} from "./pages/tutor/performance/performance.component";
import {ListWorkshopsStudentComponent} from "./pages/student/list-workshops-student/list-workshops-student.component";

const routes: Routes = [
  { path: 'tutorias', component: ListTutorshipsComponent },
  { path: 'coordinators/:id/main', component: MainContentComponent },
  {path:'tutors/:id/performance', component: PerformanceComponent},
  {path:'students/:id/workshops/new', component: ListWorkshopsStudentComponent},

];
//Added some routes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
