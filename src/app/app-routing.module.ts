import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTutorshipsComponent } from "./pages/tutor/list-tutorships/list-tutorships.component";
import { SeeSpecificWorkshipComponent } from "./pages/tutor/see-specific-workship/see-specific-workship.component";
import {MainTutorComponent} from "./pages/tutor/main-tutor/main-tutor.component";
import {SeeLessonCommentsComponent} from "./pages/coordinator/see-lesson-comments/see-lesson-comments.component";
import {SeeSpecificLessonCommentComponent} from "./pages/coordinator/see-specific-lesson-comment/see-specific-lesson-comment.component";
import {SeeLessonOptionsComponent} from "./pages/coordinator/see-lesson-options/see-lesson-options.component";
import {MainContentComponent} from "./pages/coordinator/main-content/main-content.component";
import {PerformanceComponent} from "./pages/tutor/performance/performance.component";
import {ListWorkshopsStudentComponent} from "./pages/student/list-workshops-student/list-workshops-student.component";

const routes: Routes = [
  {path:'tutors/:id', component: MainTutorComponent },
  { path: 'tutors/:id/tutorships', component: ListTutorshipsComponent },
  { path: 'tutors/:id/tutorships/:tutorshipId', component: SeeSpecificWorkshipComponent },
  //{ path: 'tutors/:id/tutorship/:tutorshipId/attendance', component: AttendanceComponent },
  { path:'coordinator/:id/lessons/:lessonId/reports/options/seecomments', component: SeeLessonCommentsComponent},
  { path:'coordinator/:id/lessons/:lessonId/reports/options/seecomments/:studentId', component: SeeSpecificLessonCommentComponent},
  { path:'coordinator/:id/lessons/:lessonId/reports/options', component: SeeLessonOptionsComponent},
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
