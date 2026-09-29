import type { AnswerResponseDto } from "../answer/response";

export interface QuestionDetailDto {
    id: number;
    subject: string;
    content: string;
    createDate: string;
    modifyDate: string;
    authorUsername: string;
    voterCount: number;
    answerList: AnswerResponseDto[];
}

export interface QuestionResponseDto {
    id: number;
    subject: string;
    content: string;
    authorUsername: string;
    answerCount: number;
}