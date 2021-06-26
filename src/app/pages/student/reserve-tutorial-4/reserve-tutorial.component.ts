import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-reserve-tutorial',
  templateUrl: './reserve-tutorial.component.html',
  styleUrls: ['./reserve-tutorial.component.css']
})
export class ReserveTutorialComponent4 implements OnInit {
  disableSelect = new FormControl(true);
  codigo1 = '';
  codigo2 = '';
  value = "0";
  constructor() { }

  ngOnInit(): void {
  }

}
