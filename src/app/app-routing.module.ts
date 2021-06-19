import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListTutorshipsComponent} from "./pages/tutor/list-tutorships/list-tutorships.component";

const routes: Routes = [
  { path: 'tutorias', component: ListTutorshipsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
