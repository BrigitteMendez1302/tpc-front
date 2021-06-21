import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTutorshipsComponent } from "./pages/tutor/list-tutorships/list-tutorships.component";
import { SeeSpecificWorkshipComponent } from "./pages/tutor/see-specific-workship/see-specific-workship.component";
import {MainTutorComponent} from "./pages/tutor/main-tutor/main-tutor.component";
import {SeeLessonCommentsComponent} from "./pages/coordinator/see-lesson-comments/see-lesson-comments.component";
import {SeeSpecificLessonCommentComponent} from "./pages/coordinator/see-specific-lesson-comment/see-specific-lesson-comment.component";
import {SeeLessonOptionsComponent} from "./pages/coordinator/see-lesson-options/see-lesson-options.component";

const routes: Routes = [
  {path:'tutors/:id', component: MainTutorComponent },
  { path: 'tutors/:id/tutorships', component: ListTutorshipsComponent },
  { path: 'tutors/:id/tutorships/:tutorshipId', component: SeeSpecificWorkshipComponent },
  //{ path: 'tutors/:id/tutorship/:tutorshipId/attendance', component: AttendanceComponent },
  { path:'coordinator/:id/lessons/:lessonId/reports/options/seecomments', component: SeeLessonCommentsComponent},
  { path:'coordinator/:id/lessons/:lessonId/reports/options/seecomments/:studentId', component: SeeSpecificLessonCommentComponent},
  { path:'coordinator/:id/lessons/:lessonId/reports/options', component: SeeLessonOptionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
