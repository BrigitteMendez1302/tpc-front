import {Lessontypetpc} from "./lessontypetpc";
import {Coursetpc} from "./coursetpc";
import {TutorTpc} from "./tutortpc";

export interface Lessontpc{
  id: number
  startDate: Date
  endDate: Date
  description: string
  meetingLink: string
  resourceLink: string
  tutor: TutorTpc
  vacants: number
  lessonType: Lessontypetpc
  course: Coursetpc
}
