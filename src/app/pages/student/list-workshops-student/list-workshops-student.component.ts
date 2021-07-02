import { Component, OnInit } from '@angular/core';
import { MatDialog} from "@angular/material/dialog";
import { ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import {LessonApiService} from "../../../services/lesson-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LessonTypeApiService} from "../../../services/lesson-type-api.service";
import {TutorApiService} from "../../../services/tutor-api.service";
import {CourseApiService} from "../../../services/course.service";

@Component({
  selector: 'app-list-workshops-student',
  templateUrl: './list-workshops-student.component.html',
  styleUrls: ['./list-workshops-student.component.css']
})
export class ListWorkshopsStudentComponent implements OnInit {
  courses: Array<any> = [];
  tutors: Array<any> = [];
  workshops: Array<any> = [];
  week: Array<any> = [];
  constructor(public dialog: MatDialog, public snackBar: MatSnackBar,
              private router: Router, private route: ActivatedRoute,
              private lessonsApiService: LessonApiService,
              private coursesApiService: CourseApiService,
              private tutorsApiService: TutorApiService) { }

  ngOnInit(): void {
    this.getCourses();
    this.getTutors();
    this.getWorkshops();
  }

  getTutors(): void {
    this.tutorsApiService.getAllTutors()
      .subscribe((response: any ) =>{
        this.tutors = response.content;
        console.log(this.tutors);
      });
  }
  getCourses():void {
    this.coursesApiService.getAllCourses()
      .subscribe((response: any ) =>{
        this.courses = response.content;
        console.log(this.courses);
      });
  }
  getWorkshops(): void {
    this.lessonsApiService.getLessonsByLessonTypeId(1)
      .subscribe((response: any ) =>{
        this.workshops = response.content;
        console.log(this.workshops);
      });
  }

  //Date methods
  formatAMPM(isoDate: string, IsStartDate: boolean) {
    let date = new Date(isoDate)
    let days:number = date.getDay();
    let strDays = this.formatDaySpanish(days);
    let hours = date.getHours();
    let minutes: string | number = date.getMinutes();
    let ampm = hours >= 12 ? ' pm ' : ' am ';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    if (IsStartDate) return strDays + hours + ':' + minutes + ' ' + ampm;
    else return hours + ':' + minutes + ' ' + ampm;
  }

  formatDaySpanish(num: number){
    let weekday : Array<string> =["Domingo ","Lunes ", "Martes ", "Miércoles ", "Jueves ", "Viernes ", "Sábado "]
    console.log(weekday[num]);
    return weekday[num];
  }

  //Snack Bar method
  openSnackBar():void {
    this.snackBar.open('Taller reservado con éxito', '',
      {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition:"right",
        panelClass: ['success']
      });
  }

  //Dialog method
  openDialog(object: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: [
        object.id,
        object.course.name,
        object.tutor.firstName,
        object.tutor.lastName,
        this.formatAMPM(object.startDate,true),
        this.formatAMPM(object.endDate,false),
      ]
    });
    dialogRef.afterClosed().subscribe(response =>{
      console.log(response);
      if (response){
        console.log(this.openSnackBar());
      }
    });
  }
}
