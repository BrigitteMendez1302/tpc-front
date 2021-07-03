import {Lessontypetpc} from "./lessontypetpc";
import {Coursetpc} from "./coursetpc";
import {TutorTpc} from "./tutortpc";

export interface Lessontpc{
  id: number
  startDate: string
  endDate: string
  description: string
  meetingLink: string
  resourceLink: string
  tutorId: number
  vacants: number
  lessonTypeId: number
  courseId: number
}
