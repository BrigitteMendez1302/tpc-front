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
  { path: 'coordinator/:id/schedule/options/edit', component: EditScheduleComponent },
]


//Added some routes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
