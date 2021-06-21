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
import {MainStudentComponent} from "./pages/student/main-student/main-student.component"
import {ReservationComponent} from "./pages/student/list-reservations/reservation.component"
import {AttendanceComponent} from "./pages/tutor/attendance/attendance.component";

const routes: Routes = [
  { path: 'tutor/:id', component: MainTutorComponent },
  { path: 'tutor/:id/tutorships', component: ListTutorshipsComponent },
  { path: 'tutor/:id/tutorships/:tutorshipId', component: SeeSpecificWorkshipComponent },
  //{ path: 'tutor/:id/tutorship/:tutorshipId/attendance', component: AttendanceComponent },
  { path:'coordinator/:id/lessons/:lessonId/reports/options/seecomments', component: SeeLessonCommentsComponent},
  { path:'coordinator/:id/lessons/:lessonId/reports/options/seecomments/:studentId', component: SeeSpecificLessonCommentComponent},
  { path:'coordinator/:id/lessons/:lessonId/reports/options', component: SeeLessonOptionsComponent},
  { path: 'coordinator/:id/main', component: MainContentComponent },
  { path:'tutor/:id/performance', component: PerformanceComponent},
  { path:'student/:id/workshops/new', component: ListWorkshopsStudentComponent},
  { path: 'tutor/:id/tutorships/:tutorshipId/attendance', component: AttendanceComponent },
  { path: 'student/:id',component:MainStudentComponent},
  { path: 'student/:id/reservations', component: ReservationComponent},
];

//Added some routes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
