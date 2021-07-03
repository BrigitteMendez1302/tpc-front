import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, FormGroup, NgForm, Validators} from '@angular/forms';
import {TutorApiService} from "../../services/tutor-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

/*  myForm = new FormGroup({
    accountNumber: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });*/

  accountNumber: string;
  password: string;

  constructor(private tutorsApi: TutorApiService, private router: Router, private route: ActivatedRoute) {
    this.accountNumber="";
    this.password ="";
  }

  ngOnInit(): void {
  }

  loginTpc() {

    if (this.accountNumber == "ac0tut" && this.password == "accdetut"){
      this.router.navigate([`tutor/15/main`])
        .then(() => console.log('Navigated to see the session'));
    }
    if (this.accountNumber == "ac001" && this.password == "passs"){
      this.router.navigate([`coordinator/35/main`])
        .then(() => console.log('Navigated to see the session'));
    }
    if (this.accountNumber == "ac0bri" && this.password == "accdebri"){
      this.router.navigate([`student/5/main`])
        .then(() => console.log('Navigated to see the session'));
    }
  }
}
