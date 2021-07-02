import {Component, OnInit, Inject, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LessonApiBriService} from "../../../services/lesson-api-bri.service";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {GoogleSignInService} from "../../../services/google-sign-in.service";
import {CalendarService} from "../../../services/calendar.service";

@Component({
  selector: 'app-see-specific-workship',
  templateUrl: './see-specific-workship.component.html',
  styleUrls: ['./see-specific-workship.component.css']
})



export class SeeSpecificWorkshipComponent implements OnInit {
  date: any;
  tutorship: any;
  startTime: any;
  endTime: any;
  isoStartDate:any;
  isoEndDate:any;
  gapi: any;
  user: gapi.auth2.GoogleUser | undefined;

  constructor(private router: Router, private route: ActivatedRoute,
              private lessonsApiService: LessonApiBriService, public dialog: MatDialog,
              private signInService : GoogleSignInService,
              private ref: ChangeDetectorRef,
              private calendarService: CalendarService) {
  }

  getTutorship(): void{
    let lessonId = Number(this.route.snapshot.paramMap.get('lessonId'));
    this.lessonsApiService.getLessonById(lessonId)
      .subscribe((response:any)=>{
        this.tutorship = response;
        console.log(this.tutorship);
        this.date = this.formatDateIsoDate(this.tutorship.startDate);
        this.startTime = this.formatNormalTime(this.tutorship.startDate);
        this.endTime = this.formatNormalTime(this.tutorship.endDate);
        console.log("Date ", this.date);
        console.log("Start time", this.startTime);
        console.log("End time", this.endTime);
      })
  }

  ngOnInit(): void {
    this.signInService.observable().subscribe(user=>{
      this.user = user
      this.ref.detectChanges()}
    )
    this.getTutorship();
  }
  signIn():void{
    if (this.user == null){
      this.signInService.signIn();
    }
    console.log(this.user);
    this.calendarService.execute();
  }
  signOut():void{
    this.signInService.signOut()
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
      .then(() => console.log('Navigated to see the attendance for this tutorship'));
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

  authenticate() {
    this.gapi.load("client:auth2", function() {
      // @ts-ignore
      gapi.auth2.init({client_id: "437532304249-udd962otmcipe2jau8i1osbljgje1jhh.apps.googleusercontent.com"});
    });
    return this.gapi.auth2.getAuthInstance()
      .signIn({scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events"})
      .then(function() { console.log("Sign-in successful"); },
        function(err: any) { console.error("Error signing in", err); }).then(this.loadClient())
      .then(this.execute);
  }
  loadClient() {
    this.gapi.client.setApiKey("AIzaSyAu6PEqcKVvXdFwV-EnFKhOMlHVjNrb9Z4");
    return this.gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
      .then(function() { console.log("GAPI client loaded for API"); },
        function(err:any) { console.error("Error loading GAPI client for API", err); });
  };

  execute() {
    return this.gapi.client.calendar.events.insert({
      "calendarId": "primary",
      "conferenceDataVersion": 1,
      "sendNotifications": true,
      "sendUpdates": "all",
      "resource": {
        "conferenceData": {
          "createRequest": {
            "requestId": "sample123",
            "conferenceSolutionKey": {
              "type": "hangoutsMeet"
            }
          }
        },
        "end": {
          "dateTime": "2021-06-24T12:43:47.805Z"
        },
        "start": {
          "dateTime": "2021-06-24T06:43:47.805Z"
        },
        "anyoneCanAddSelf": true,
        "description": "reunion de prueba",
        "attendees": [
          {"email": "brigittemmendezpastor@gmail.com"},
          {"email": "julissakarol2012@gmail.com"},
          {"email": "lucas.moreno.olivos@gmail.com"},
        ],
        "summary": "la reu de patroness"
      }
    })
      .then(function(response:any) {
          // Handle the results here (response.result has the parsed body).
          console.log("Response", response);
        },
        function(err:any) { console.error("Execute error", err); });
  };

  openDialog() {
    const dialogRef = this.dialog.open(DialogDataExampleDialog,
      {
        data: {
          date: this.date,
          startTime: this.startTime,
          endTime: this.endTime
        },
      });

    dialogRef.beforeClosed().subscribe(async result => {
      console.log(`Dialog result bed:`, result);
      let lessonId = Number(this.route.snapshot.paramMap.get('lessonId'));
      let theDate = this.formatNormalDate(result.date);
      let utcStartDate = theDate + ' ' + result.startTime + ' UTC';
      let utcEndDate = theDate + ' ' + result.endTime + ' UTC';
      this.isoStartDate = new Date(utcStartDate).toISOString();
      this.isoEndDate = new Date(utcEndDate).toISOString();
      let apiFormatIsoStart = this.isoStartDate.replace(/:/g, '%3A');
      let apiFormatIsoEnd = this.isoEndDate.replace(/:/g, '%3A');
      console.log("Start", apiFormatIsoStart);
      console.log("End", apiFormatIsoEnd);
      this.lessonsApiService.updateLessonByTutor(lessonId, apiFormatIsoStart, apiFormatIsoEnd)
        .subscribe(response => {
          console.log(response);
        });
      this.getTutorship();
    });
  };

}


export interface TutorshipData {
  date: Date;
  startTime: string;
  endTime: string;
}
@Component({
  selector: './see-specific-workship-dialog',
  templateUrl: './see-specific-workship-dialog.component.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: TutorshipData) {}
}
