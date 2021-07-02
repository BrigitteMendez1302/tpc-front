import {Component, OnInit, ViewChild} from '@angular/core';
import { Schedule } from '../../../models/schedule'
import {TutorApiService} from "../../../services/tutor-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Tutor} from "../../../models/tutor";
import {Tutorial} from "../../../models/tutorial";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {TutorTpc} from "../../../models/tutortpc";
import {LessonTypeApiService} from "../../../services/lesson-type-api.service";
import {Lessontypetpc} from "../../../models/lessontypetpc";
import {Coursetpc} from "../../../models/coursetpc";
import {CourseApiService} from "../../../services/course.service";

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent3 implements OnInit {
  editS: Schedule[] = [
    {horario:'7:30 - 8:40', tipo:'Taller', tutor:'Rodriguez', fecha: new Date(), endDate: new Date().getHours(), startDate: new Date().getHours()}
  ]

  tutor =  {} as TutorTpc;
  tutors: TutorTpc[] = [];
  courses: Coursetpc[] = [];
  date: Date = new Date();
  lessonTypes: Lessontypetpc[] = [];
  constructor(private tutorApiService: TutorApiService, private lessonTypeApiService: LessonTypeApiService, private courseApiService: CourseApiService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.tutorApiService.getAllTutors().subscribe(response => {
      this.tutors = response.content;
    });
    this.lessonTypeApiService.getAllLessonTypes().subscribe(response => {
      this.lessonTypes = response.content;
    })
    this.courseApiService.getAllCourses().subscribe((response: any) => {
      this.courses = response.content
    })
  }

  getAllTutorsAvailable(): void {

  }

}



