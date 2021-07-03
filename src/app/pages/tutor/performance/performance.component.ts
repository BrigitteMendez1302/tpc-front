import {Component, OnInit} from '@angular/core';
import {CourseApiService} from "../../../services/course.service";
import {LessonTypeApiService} from "../../../services/lesson-type-api.service";
import {TutorAveragesService} from "../../../services/tutor-averages.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {TutorTpc} from "../../../models/tutortpc";
import * as _ from "lodash";


@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
  tutorId!: number;
  value: number = 4.5;
  courses: Array<any> = [];
  constructor(private coursesApiService: CourseApiService,
              private lessontypeApi: LessonTypeApiService,
              private tutoraverageApi: TutorAveragesService,
              private router: Router, private route: ActivatedRoute,) {
    this.tutorId= Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getCourses();
  }

  getValue(): number {
    return this.value;
  }
  getCourses():void {
    this.coursesApiService.getAllCourses()
      .subscribe((response: any ) =>{
        this.courses = response.content;
        console.log(this.courses);
      });
  }

  getWorkshopsAverage(tutorId: number, courseId: number): void {
    let value: any;
    this.tutoraverageApi.getWorkshopsAverage(tutorId, courseId)
      .subscribe((response:TutorTpc) => {
        value = _.cloneDeep(response);
        console.log(value);
      });
    return value;
  }
  getTutorshipsAverage(tutorId: number, courseId: number): void {
    this.tutoraverageApi.getTutorshipsAverage(tutorId, courseId);
  }

}
