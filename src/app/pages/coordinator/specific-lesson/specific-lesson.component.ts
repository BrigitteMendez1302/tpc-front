import { Component, OnInit, Inject } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LessonApiBriService} from "../../../services/lesson-api-bri.service";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-specific-lesson',
  templateUrl: './specific-lesson.component.html',
  styleUrls: ['./specific-lesson.component.css']
})
export class SpecificLessonComponent implements OnInit {

  date: any;
  tutorship: any;
  startTime: any;
  endTime: any;
  isoStartDate:any;
  isoEndDate:any;
  gapi: any;
  user: boolean = false;
  isTutor: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute,
              private lessonsApiService: LessonApiBriService, public dialog: MatDialog) {
  }

  getTutorship(): void{
    let lessonId = Number(this.route.snapshot.paramMap.get('lessonId'));
    this.lessonsApiService.getLessonById(lessonId)
      .subscribe((response:any)=>{
        this.tutorship = response;
        this.date = this.formatDateIsoDate(this.tutorship.startDate);
        this.startTime = this.formatNormalTime(this.tutorship.startDate);
        this.endTime = this.formatNormalTime(this.tutorship.endDate);
      })
  }

  ngOnInit(): void {
    this.user = this.router.url.includes("coordinator");
    this.getTutorship();
  }
  formatNormalTime(isoDate:string){
    let date = new Date(isoDate)
    let hours = date.getHours();
    let minutes: string | number = date.getMinutes();
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime =  hours + ':' + minutes;
    return strTime;
  }
  formatAMPM(isoDate: string) {
    let date = new Date(isoDate)
    let hours = date.getHours();
    let minutes: string | number = date.getMinutes();
    let ampm = hours >= 12 ? ' pm ' : ' am ';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime =  hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  formatDateIsoDate(paramDate:any){
    let date = new Date(paramDate);
    let year = date.getFullYear();
    let month: string|number = date.getMonth()+1;
    let dt: string|number = date.getDate();
    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    return year+'-' + month + '-'+dt
  }
  navigateToAttendance(){
    this.router.navigate(['attendance'], { relativeTo: this.route })
      .then(() => console.log('Navigated to see the attendance for this lesson'));
  }
  navigateToComments(){
    this.router.navigate(['comments'], { relativeTo: this.route })
      .then(() => console.log('Navigated to see the comments of this lesson'));
  }
  convertTime(time12h: any){
    const [time, modifier] = time12h.split(" ");

    let [hours, minutes] = time.split(":");


    if (hours === "12") {
      hours = "00";
    }

    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
  };
  formatNormalDate(date: any){
    var newDate = new Date(date);
    return (newDate.getMonth()+1).toString() + '/'+newDate.getDate().toString()
      +'/'+newDate.getFullYear().toString();
  };
}
