import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListTutorshipsComponent} from "./pages/tutor/list-tutorships/list-tutorships.component";
import {MainContentComponent} from "./pages/coordinator/main-content/main-content.component";

const routes: Routes = [
  { path: 'tutorias', component: ListTutorshipsComponent },
  { path: 'coordinator/:id/main', component: MainContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
