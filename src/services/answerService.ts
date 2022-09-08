import { InsertAnswer } from '../types/answerTypes';
import * as answerRepository from '../repositories/answerRepository';

export async function createAnswer(newAnswer: InsertAnswer) {
    await answerRepository.insert(newAnswer);
}
