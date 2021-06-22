export class Schedule {
  horario: string = '';
  tipo: string = '';
  tutor: string = '';
  fecha: Date = new Date();
  startDate = new Date().getHours();
  endDate = new Date().getHours();

  constructor() {
  }
}
