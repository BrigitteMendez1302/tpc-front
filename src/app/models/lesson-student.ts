import {Student} from "./student";
import {Lessontpc} from "./lessontpc";

export interface LessonStudent {
  studentId: number
  lessonId: number
  topic: string
  comment: string
  qualification: number
  complaint: boolean
  assistance: boolean
}


