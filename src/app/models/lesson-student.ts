import {Student} from "./student";
import {Lessontpc} from "./lessontpc";

export interface LessonStudent {
  studentId: Student
  lessonId: Lessontpc
  topic: string
  comment: string
  qualification: number
  complaint: boolean
  assistance: boolean
}


