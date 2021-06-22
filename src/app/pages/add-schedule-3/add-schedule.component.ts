import { Component, OnInit } from '@angular/core';
import { Schedule } from '../../models/schedule'

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent3 implements OnInit {
  editS: Schedule[] = [
    {horario:'7:30 - 8:40', tipo:'Taller', tutor:'Rodriguez', fecha: new Date(), endDate: new Date().getHours(), startDate: new Date().getHours()}
  ]
  date: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}



