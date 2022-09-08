import { Request, Response } from 'express';
import { InsertQuestion, IAllQuestions } from '../types/questionTypes';
import { PayloadAnswer } from '../types/answerTypes';
import * as questionService from '../services/questionService';
import * as answerService from '../services/answerService';

export async function createQuestion(req: Request, res: Response) {
  const newQuestion: InsertQuestion = req.body;
  
  await questionService.createQuestion(newQuestion);

  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const questionId: number = Number(req.params.id);
  const newAnswer: PayloadAnswer = req.body;

  await answerService.createAnswer({ ...newAnswer, questionId });

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions: IAllQuestions = await questionService.get();

  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  const questionId: number = Number(req.params.id);

  const questions = await questionService.getById(questionId);

  res.status(200).send(questions);
}
