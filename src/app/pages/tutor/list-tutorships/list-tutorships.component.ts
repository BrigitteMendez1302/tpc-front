import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-list-tutorships',
  templateUrl: './list-tutorships.component.html',
  styleUrls: ['./list-tutorships.component.css']
})
export class ListTutorshipsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToSpecificWorkshop(): void {
    this.router.navigate([':tutorshipId'], {relativeTo: this.route})
      .then(() => console.log('Navigated to see more about the tutorship'));
  }
}
