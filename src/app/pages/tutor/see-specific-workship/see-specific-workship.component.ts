import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LessonApiBriService} from "../../../services/lesson-api-bri.service";

@Component({
  selector: 'app-see-specific-workship',
  templateUrl: './see-specific-workship.component.html',
  styleUrls: ['./see-specific-workship.component.css']
})
export class SeeSpecificWorkshipComponent implements OnInit {

  tutorship: any;
  constructor(private router: Router, private route: ActivatedRoute,
              private lessonsApiService: LessonApiBriService) {
  }

  getTutorship(): void{
    let lessonId = Number(this.route.snapshot.paramMap.get('tutorshipId'));
    this.lessonsApiService.getLessonById(lessonId)
      .subscribe((response:any)=>{
        this.tutorship = response;
        console.log(this.tutorship);
      })
  }

  ngOnInit(): void {
    this.getTutorship();
  }

  formatAMPM(isoDate: string) {
    let date = new Date(isoDate)
    let days:number = date.getDay();
    let strDays = this.formatDaySpanish(days);
    let hours = date.getHours();
    let minutes: string | number = date.getMinutes();
    let ampm = hours >= 12 ? ' pm ' : ' am ';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = strDays + hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  formatDaySpanish(num: number){
    let weekday : Array<string> =["Domingo ","Lunes ", "Martes ", "Miércoles ", "Jueves ", "Viernes ", "Sábado "]
    console.log(weekday[num]);
    return weekday[num];
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
}
