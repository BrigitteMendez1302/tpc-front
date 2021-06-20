import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../../models/tutorial';


@Component({
  selector: 'app-reserve-tutorial',
  templateUrl: './reserve-tutorial.component.html',
  styleUrls: ['./reserve-tutorial.component.css']
})
export class ReserveTutorialComponent1 implements OnInit {
  tutorialData: Tutorial = {} as Tutorial;
  tutorialId!: number;
  tutorials: Tutorial[] = [];
  defaultTutorial: Tutorial = { id: 0, tutor:'', dia: '', course: '', hora: '', modalidad: '', codigo1: '', codigo2: ''};
  constructor() { }
  ngOnInit(): void {
  }

}
