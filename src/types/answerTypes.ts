import { Answer } from "@prisma/client";

export type TAnswer = Answer;

export type PayloadAnswer = Omit<Answer, "id" | "questionId">;

export type InsertAnswer = Omit<Answer, "id">;