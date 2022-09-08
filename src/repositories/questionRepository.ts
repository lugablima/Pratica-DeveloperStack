import { InsertQuestion, TQuestion } from '../types/questionTypes';
import { prisma } from '../config/database';

export async function insert(question: InsertQuestion) {
    await prisma.question.create({ data: question });
} 

export async function findAll(): Promise<TQuestion[]> {
    const questions: TQuestion[] = await prisma.question.findMany();

    return questions;
}

export async function findById(id: number) {
    const result = await prisma.question.findUnique({
        where: { id }, include: { answers: { select: { answeredBy: true, answer: true } } }
    });

    return result;
}