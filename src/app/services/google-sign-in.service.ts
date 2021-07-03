import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from "rxjs";
import {CalendarService} from "./calendar.service";

@Injectable({
  providedIn: 'root'
})
export class GoogleSignInService {

  private calendarApi: CalendarService;
  // @ts-ignore
  private auth2: gapi.auth2.GoogleAuth;
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1);

  constructor() {

    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: "437532304249-udd962otmcipe2jau8i1osbljgje1jhh.apps.googleusercontent.com",
      })
    })
    this.calendarApi = new CalendarService();
  }

  public signIn(startDate: string, endDate: string, summary: string) {
    this.auth2.signIn({
      scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events"
    }).then(user => {
      this.subject.next(user);
      this.calendarApi.execute(startDate, endDate, summary);
    }).catch(()=>{
      // @ts-ignore
      this.subject.next(null);
    })
  }

  public signOut(){
    this.auth2.signOut()
      .then(
        ()=>{
          //@ts-ignore
          this.subject.next(null);
        })
  }

  public observable():Observable<gapi.auth2.GoogleUser>{
    return this.subject.asObservable();
  }


  /*  authenticate() {
      return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events"})
        .then(function() { console.log("Sign-in successful"); },
          function(err) { console.error("Error signing in", err); });
    }
    loadClient() {
      gapi.client.setApiKey("AIzaSyAu6PEqcKVvXdFwV-EnFKhOMlHVjNrb9Z4");
      return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
          function(err) { console.error("Error loading GAPI client for API", err); });
    }
    // Make sure the client is loaded and sign-in is complete before calling this method.
    execute() {
      return gapi.client.calendar.events.insert({
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
        .then(function(response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
          },
          function(err) { console.error("Execute error", err); });
    }
    gapi.load("client:auth2", function() {
      gapi.auth2.init({client_id: "437532304249-udd962otmcipe2jau8i1osbljgje1jhh.apps.googleusercontent.com"});
    });*/
}
