import type { AnswerRequestDto, AnswerResponseDto } from "../types";
import { axiosInstance } from "./axiosInstance";

export const answerApi = {

    // 1. 답변 등록
    create: async (questionId: number, data: AnswerRequestDto) => {
        const response = await axiosInstance.post<AnswerResponseDto>(`/api/questions/${questionId}/answers`, data);
        return response.data;
    },

    // 2. 답변 수정
    update: async (id: number, data: AnswerResponseDto) => {
        const response = await axiosInstance.put<AnswerResponseDto>(`/api/answer/${id}`, data);
        return response.data;
    },

    // 3. 답변 삭제
    remove: async (id: number) => {
        await axiosInstance.delete(`/api/answer/${id}`);
    },

    // 4. 답변 추천
    vote: async (id: number) => {
        await axiosInstance.post(`/api/answer/${id}/vote`);
    },

};