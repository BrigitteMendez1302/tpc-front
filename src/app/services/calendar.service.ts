import { Injectable } from '@angular/core';
import {LessonApiBriService} from "./lesson-api-bri.service";

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() {
    gapi.load('client', ()=>{
      gapi.client.init({
        apiKey: 'AIzaSyAu6PEqcKVvXdFwV-EnFKhOMlHVjNrb9Z4',
        clientId: '437532304249-udd962otmcipe2jau8i1osbljgje1jhh.apps.googleusercontent.com',
        discoveryDocs:["https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
        scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events"
      })
    })
  }

  public execute(startDate: string, endDate: string, summary: string) : Promise<gapi.client.calendar.Events>{
    let event = {
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
          "dateTime": "2021-07-05T12:43:47.805Z"
        },
        "start": {
          "dateTime": "2021-07-05T06:43:47.805Z"
        },
        "anyoneCanAddSelf": true,
        "description": "",
        "attendees": [
        ],
        "summary": " "
      }
    }
    event["resource"]["end"]["dateTime"] = endDate;
    event["resource"]["start"]["dateTime"] = startDate;
    event["resource"]["summary"] = summary;

    return new Promise(resolve => {
      gapi.client.calendar.events.insert(event).then(function(response) {
          console.log("Response", response);

        },
        function(err) { console.error("Execute error", err); });
    }
    )
}
}
