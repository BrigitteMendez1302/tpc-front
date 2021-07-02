import { Injectable } from '@angular/core';

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

  public execute() : Promise<gapi.client.calendar.Events>{
    return new Promise(resolve => {
      gapi.client.calendar.events.insert({
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
          "description": "reunion de prueba, ahora para open",
          "attendees": [
            {"email": "brigittemmendezpastor@gmail.com"},
            {"email": "julissakarol2012@gmail.com"},
            {"email": "lucas.moreno.olivos@gmail.com"},
          ],
          "summary": "la reu de patroness"
        }
      }).then(function(response) {
          console.log("Response", response);
        },
        function(err) { console.error("Execute error", err); });
    }
    )
}
}
