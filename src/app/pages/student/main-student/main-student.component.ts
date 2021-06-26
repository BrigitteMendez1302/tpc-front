import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main-student',
  templateUrl: './main-student.component.html',
  styleUrls: ['./main-student.component.css']
})
export class MainStudentComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToSeeReservations(): void {
    this.router.navigate([`student/1/reservations`])
      .then(() => console.log('Navigated to see more about the reservations'));
  }

}
