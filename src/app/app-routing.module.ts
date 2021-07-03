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
import {ReserveTutorialComponent1} from "./pages/student/reserve-tutorial-1/reserve-tutorial.component";
import {ReserveTutorialComponent2} from "./pages/student/reserve-tutorial-2/reserve-tutorial.component";
import {ReserveTutorialComponent3} from "./pages/student/reserve-tutorial-3/reserve-tutorial.component";
import {ProfileStudentComponent} from "./pages/student/profile-student/profile-student.component";
import {ProfileTutorComponent} from "./pages/tutor/profile-tutor/profile-tutor.component";
import {ReserveTutorialComponent4} from "./pages/student/reserve-tutorial-4/reserve-tutorial.component";
import {ProfileCoordinatorComponent} from "./pages/coordinator/profile-coordinator/profile-coordinator.component";
import {AddScheduleComponent1} from "./pages/coordinator/add-schedule-1/add-schedule.component";
import {AddScheduleComponent3} from "./pages/coordinator/add-schedule-3/add-schedule.component";
import {EditScheduleComponent} from "./pages/coordinator/edit-schedule/edit-schedule.component";
import {AddScheduleComponent2} from "./pages/coordinator/add-schedule-2/add-schedule.component";
import {AssistsComponent} from "./pages/coordinator/assists/assists.component";
import {OrganizetrainingComponent} from "./pages/coordinator/organizetraining/organizetraining.component";
import {OrganizeTrainingSelectGuestsComponent} from "./pages/coordinator/organize-training-select-guests/organize-training-select-guests.component";
import {ModifytrainingComponent} from "./pages/coordinator/modifytraining/modifytraining.component";
import { SeeSpecificReservationComponent } from './pages/student/see-specific-reservation/see-specific-reservation.component';
import {LoginComponent} from "./pages/login/login.component";
import {ListLessonsComponent} from "./pages/coordinator/list-lessons/list-lessons.component";
import {SpecificLessonComponent} from "./pages/coordinator/specific-lesson/specific-lesson.component";
import {ListTrainingsComponent} from "./pages/coordinator/list-trainings/list-trainings.component";
import {ShowSuggestionsComponent} from "./pages/coordinator/show-suggestions/show-suggestions.component";
import {ReserveLessonComponent} from "./pages/student/reserve-lesson/reserve-lesson.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'tutor/:id/main', component: MainTutorComponent },
  { path: 'tutor/:id/tutorships', component: ListTutorshipsComponent },
  { path: 'tutor/:id/tutorships/:lessonId', component: SeeSpecificWorkshipComponent },
  { path: 'tutor/:id/workshops', component: ListTutorshipsComponent },
  { path: 'tutor/:id/workshops/:lessonId', component: SeeSpecificWorkshipComponent },
  { path: 'tutor/:id/workshops/:lessonId/attendance', component: AttendanceComponent },
  //{ path: 'tutor/:id/tutorship/:tutorshipId/attendance', component: AttendanceComponent },
  { path:'coordinator/:id/management', component: SeeLessonOptionsComponent},
  { path: 'coordinator/:id/main', component: MainContentComponent },
  { path:'tutor/:id/performance', component: PerformanceComponent},
  { path:'student/:id/workshops/new', component: ListWorkshopsStudentComponent},
  { path: 'tutor/:id/tutorships/:lessonId/attendance', component: AttendanceComponent },
  { path: 'student/:id/main',component:MainStudentComponent},
  { path: 'student/:id/reservations', component: ReservationComponent},
  { path: 'student/:id/reservations/:reservationId',component:SeeSpecificReservationComponent},
  { path: 'student/:id/tutorships/new1', component: ReserveTutorialComponent1 },
  { path: 'student/:id/tutorships/new2', component: ReserveTutorialComponent2 },
  { path: 'student/:id/tutorships/new3', component: ReserveTutorialComponent3 },
  { path: 'student/:id/tutorships/new4', component: ReserveTutorialComponent4 },
  { path: 'student/:id/profile', component: ProfileStudentComponent },
  { path: 'tutor/:id/profile', component: ProfileTutorComponent },
  { path: 'coordinator/:id/profile', component: ProfileCoordinatorComponent },
  { path: 'coordinator/:id/schedule', component: AddScheduleComponent1 },
  { path: 'coordinator/:id/schedule/lessons/new', component: AddScheduleComponent3 },
  { path: 'coordinator/:id/schedule/trainings/new', component: OrganizetrainingComponent },
  { path: 'coordinator/:id/schedule/trainings/new/guests', component: OrganizeTrainingSelectGuestsComponent },
  { path: 'coordinator/:id/management/lessons', component: ListLessonsComponent},
  { path:'coordinator/:id/management/lessons/:lessonId', component: SpecificLessonComponent},
  { path:'coordinator/:id/management/lessons/:lessonId/comments', component: SeeLessonCommentsComponent},
  { path:'coordinator/:id/management/lessons/:lessonId/comments/:commentId', component: SeeSpecificLessonCommentComponent},
  { path: 'coordinator/:id/management/lessons/:lessonId/attendance', component: AssistsComponent },
  { path: 'coordinator/:id/management/lessons/:lessonId/edit', component: EditScheduleComponent },
  {path: 'coordinator/:id/management/trainings', component: ListTrainingsComponent},
  { path: 'coordinator/:id/management/trainings/:trainingId/edit', component: ModifytrainingComponent },
  { path: 'coordinator/:id/suggestions', component: ShowSuggestionsComponent},
  { path: 'student/:id/reserve-lesson', component: ReserveLessonComponent},
]


//Added some routes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
