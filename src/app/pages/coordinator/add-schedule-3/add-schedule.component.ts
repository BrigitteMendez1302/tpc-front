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
import {Lessontpc} from "../../../models/lessontpc";
import {LessonApiService} from "../../../services/lesson-api.service";
import {toNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";
import {formatDate} from "@angular/common";

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
  lessonData = {} as Lessontpc;
  prueba: string = '';
  lessonTypes: Lessontypetpc[] = [];
  monti: number = 0;
  dayi: number = 0;
  hora: string = '';
  inicio_hora: string = '';
  final_hora: string = '';
  hora_f: string = '';
  constructor(private tutorApiService: TutorApiService, private lessonTypeApiService: LessonTypeApiService, private courseApiService: CourseApiService, private lessonApiService: LessonApiService ,private router: Router, private route: ActivatedRoute) {

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

  formatTimer(timing: string){
    timing = timing.replace(/:/g, " ")
    let inicio_hora
    var arr = timing.split(" ");
    console.log(arr)
    if (parseInt(arr[0]) < 10 && arr[2] == 'PM'){
      let v1 = parseInt(arr[0]) + 12;
      arr[0] = v1.toString()
      this.final_hora = arr[0];
    }else{
      this.final_hora = parseInt(arr[0]) < 10 ? '0'+arr[0] : arr[0];
    }
    inicio_hora = parseInt(arr[0]) < 10 ? '0'+arr[0] : arr[0];
    inicio_hora+= ':'+arr[1]+':000Z'
    return inicio_hora;
  }

  formatDateTimer(date: Date, hora: string){
    let year = date.getFullYear()
    let monti = (this.lessonData.startDate.getMonth()+1).toString()
    if (parseInt(monti) < 10) {
      monti = '0'+monti;
    }

    let dayi = this.lessonData.startDate.getDate().toString();
    if (parseInt(dayi) < 10){
      dayi = '0'+dayi;
    }
    return year + '-' + monti + '-' + dayi + 'T'+hora;
  }

  createLesson() {
    this.lessonData.description = 'No description';
    this.inicio_hora = this.formatTimer(this.hora)
    this.final_hora = this.formatTimer(this.hora_f)
    let stDate = this.formatDateTimer(this.lessonData.startDate, this.inicio_hora);
    let stFDate =this.formatDateTimer(this.lessonData.startDate, this.final_hora);
    console.log(stDate)
    this.lessonData.startDate = new Date(stDate);
    this.lessonData.endDate  = new Date(stFDate);
    console.log(this.lessonData.startDate)
    //this.lessonApiService.addLesson(this.lessonData)
  }
}



