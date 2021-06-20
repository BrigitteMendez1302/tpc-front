import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css']
})
export class ProfileStudentComponent implements OnInit {

  name= "Josias Rodriguez";
  codigo: string = '0000000';
  correo: string = 'rodriguez@gmail.com';
  campus: string = 'San Miguel';
  carrera: string = 'Ingenieria de Sistemas';
  isEditedMode: Boolean = true;
  constructor() { }



  ngOnInit(): void {
  }

}
