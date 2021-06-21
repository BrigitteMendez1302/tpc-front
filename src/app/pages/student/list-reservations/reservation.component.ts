import { Component, OnInit } from '@angular/core';
import { LessonApiService } from '../../../services/lesson-api.service';
import { Lesson } from '../interfaces/lesson.interface';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers:[LessonApiService],
})
export class ReservationComponent implements OnInit {
  listLessons:Lesson[]=[]
  constructor(private lessonApiService:LessonApiService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(): void {
    this.lessonApiService.getAllLessons().subscribe((response: any) => {
      this.listLessons = response;
      console.log(this.listLessons);
    });
  }
}
