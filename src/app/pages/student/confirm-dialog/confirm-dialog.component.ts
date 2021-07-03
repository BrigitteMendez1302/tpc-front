import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Lessontpc} from "../../../models/lessontpc";
import {ActivatedRoute, Router} from "@angular/router";
import {LessonStudentsApiService} from "../../../services/lesson-student-api.service";
import {LessonStudent} from "../../../models/lesson-student";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  studentId!: number;
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public workshop: Lessontpc,
    private router: Router,private route: ActivatedRoute,
    private LessonStudenstApi: LessonStudentsApiService) {
    this.studentId= Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }

  cancelar(): void {
    this.dialogRef.close();
  }

  inscribirse(workshopId: number): void {
    const newlessonStudent = {studentId: this.studentId, lessonId: workshopId}
     this.LessonStudenstApi.addLessonStudent(newlessonStudent)
       .subscribe((response: any ) =>{
         console.log(response.content);
       });
  }

  //Date methods
  formatAMPM(isoDate: any, IsStartDate: boolean) {
    let date = new Date(isoDate);
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
}
