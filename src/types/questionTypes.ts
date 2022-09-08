import { Question } from "@prisma/client";

export type TQuestion = Question;

export type InsertQuestion = Omit<Question, "id">;

export interface IAllQuestions {
    questions: Question[];
}
