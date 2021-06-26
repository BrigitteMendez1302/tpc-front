import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonApiService } from 'src/app/services/lesson-api.service';
import { Lesson } from '../interfaces/lesson.interface';

@Component({
  selector: 'app-see-specific-reservation',
  templateUrl: './see-specific-reservation.component.html',
  styleUrls: ['./see-specific-reservation.component.css']
})
export class SeeSpecificReservationComponent implements OnInit {
  lesson:Lesson = {id:1,course:"",lessonType: "",tutor:"",urlSession:""}
  constructor(private lessonApiService:LessonApiService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id:String|null = this.route.snapshot.paramMap.get('reservationId');
    if (id !== null)
    this.getLessonById(id);
  }

  getLessonById(id:String): void {
    this.lessonApiService.getLessonById(id).subscribe((response: any) => {
      this.lesson = response;
    });
  }

}
