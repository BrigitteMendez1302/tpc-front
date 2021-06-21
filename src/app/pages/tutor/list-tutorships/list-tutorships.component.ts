import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-tutorships',
  templateUrl: './list-tutorships.component.html',
  styleUrls: ['./list-tutorships.component.css']
})
export class ListTutorshipsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToSpecificWorkshop(): void {
    this.router.navigate([`tutors/101/tutorships/4`])
      .then(() => console.log('Navigated to see more about the tutorship'));
  }
}
