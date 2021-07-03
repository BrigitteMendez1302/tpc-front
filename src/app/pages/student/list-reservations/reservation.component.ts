import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {LessonApiBriService} from "../../../services/lesson-api-bri.service";
import {Lessontpc} from "../../../models/lessontpc";


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers:[LessonApiBriService],
})
export class ReservationComponent implements OnInit {
  listLessons:Lessontpc[]=[]
  constructor(private lessonApiService:LessonApiBriService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getLessonsByStudentId()
  }

  getLessonsByStudentId(): void {
    this.lessonApiService.getLessonByStudentId(1).subscribe((response: any) => {
      this.listLessons = response.content;
      console.log(this.listLessons)
    });
  }

  navigateToSeeSpecificReserve(id:number):void{
    this.router.navigate([`./student/1/reservations/${id}`])
      .then(() => console.log('Navigated to see a specific reservation'));
  }
}
