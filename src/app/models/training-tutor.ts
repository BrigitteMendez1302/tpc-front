import {Tutor} from "./tutor";
import {Training} from "./training";

export interface TrainingTutor {
  id: number
  tutorId: Tutor
  trainingId: Training
  assistance: boolean
}
