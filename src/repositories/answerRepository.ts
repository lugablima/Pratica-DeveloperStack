import { prisma } from '../config/database';
import { InsertAnswer } from '../types/answerTypes';

export async function insert(question: InsertAnswer) {
    await prisma.answer.create({ data: question });
} 