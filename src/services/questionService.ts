import { InsertQuestion, TQuestion, IAllQuestions } from '../types/questionTypes';
import * as questionRepository from '../repositories/questionRepository';

export async function createQuestion(newQuestion: InsertQuestion) {
    await questionRepository.insert(newQuestion);
}

export async function get() {
    const questions: TQuestion[] = await questionRepository.findAll();

    const allQuestions: IAllQuestions = { questions };

    return allQuestions; 
}

export async function getById(id: number) {
    const questions = await questionRepository.findById(id);

    return questions; 
}
