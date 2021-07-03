import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LessonApiBriService} from "../../../services/lesson-api-bri.service";

@Component({
  selector: 'app-list-tutorships',
  templateUrl: './list-tutorships.component.html',
  styleUrls: ['./list-tutorships.component.css']
})
export class ListTutorshipsComponent implements OnInit {

  tutorships: Array<any> = [];
  week:Array<any>=[];
  isTutorship: boolean = true;
  isWorkshop: boolean = true;
  constructor(private router: Router, private route: ActivatedRoute,
              private lessonsApiService: LessonApiBriService) {
  }
  ngOnInit(): void {
    this.getTutorships();
  }

  getTutorships(): void{
    this.week = this.getWeek(new Date());
    let start = this.formatDateIsoDate(this.week[0]);
    let end = this.formatDateIsoDate(this.week[7]);
    let tutorId = Number(this.route.snapshot.paramMap.get('id'))
    console.log(start);
    console.log(end);
    let lessonType;
    this.isTutorship = this.router.url.includes("tutorships");
    this.isWorkshop = this.router.url.includes("workshops");
    if (this.isTutorship){
      lessonType = 5;
    }
    else{
      lessonType = 1
    }
    this.lessonsApiService.getLessonsByTutorIdAndLessonTypeIdAndInRange
    (tutorId,lessonType,start, end)
      .subscribe((response: any ) =>{
      this.tutorships = response.content;
      console.log(this.tutorships);
    });
  }

  navigateToSpecificWorkshop(tutorshipId: number): void {
    this.router.navigate([tutorshipId], {relativeTo: this.route})
      .then(() => console.log('Navigated to see more about the tutorship'));
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
  getWeek(fromDate:any){
    let sunday = new Date(fromDate.setDate(fromDate.getDate()-fromDate.getDay()))
      ,result = [new Date(sunday).toISOString()];
    while (sunday.setDate(sunday.getDate()+1) && sunday.getDay()!==0) {
      result.push(new Date(sunday).toISOString());
    }
    result.push(new Date(sunday).toISOString());
    return result;
  }
}
