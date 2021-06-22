import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-tutor',
  templateUrl: './profile-tutor.component.html',
  styleUrls: ['./profile-tutor.component.css']
})
export class ProfileTutorComponent implements OnInit {
  name = 'Lenin Casanova';
  codigo = '0000000';
  cargo = 'Tutor';
  carrera = 'Ingenieria de Sistemas';
  campus = 'San Miguel';
  correo = 'example@upc.edu.pe';

  cursos: Course[] = [
    {id:1, name:'Programacion I', seccion: "C001"},
    {id:2, name:"Programacion II", seccion: "C002"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

export class Course {
  id: number = 0;
  seccion: string = '';
  name: string = '';
  constructor() {
  }
}
