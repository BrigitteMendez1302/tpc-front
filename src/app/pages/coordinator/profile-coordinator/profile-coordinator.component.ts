import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-coordinator',
  templateUrl: './profile-coordinator.component.html',
  styleUrls: ['./profile-coordinator.component.css']
})
export class ProfileCoordinatorComponent implements OnInit {
  name: string = 'Alfonso Siphron';
  cargo: string = 'Docente';
  departamento: string = 'Ingeniería e Informática';
  campus: string = 'San Miguel';
  correo: string = 'example@upc.edu.pe';
  constructor() { }

  ngOnInit(): void {
  }


  cursos: Course[] = [
    {id:1, name:'Programacion I', seccion: "C001"},
    {id:2, name:"Programacion II", seccion: "C002"}
  ]

}


export class Course {
  id: number = 0;
  seccion: string = '';
  name: string = '';
  constructor() {}
}
