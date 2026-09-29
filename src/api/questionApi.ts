import { axiosInstance } from "./axiosInstance";
import type { QuestionRequestDto, QuestionDetailDto, QuestionResponseDto, PageReponse } from "../types";

export const questionApi = {
    // 1. 질문 목록 조회(페이징 + 검색)
    getList: async (page: number = 0, kw: string = '') => {
        const response = await axiosInstance.get<PageReponse<QuestionResponseDto>>('/api/questions', {
            params: { page, kw },
        })
        return response.data;
    },

    // 2. 질문 상세 조회
    getDetail: async (id: number) => {
        const response = await axiosInstance.get<QuestionDetailDto>(`/api/questions/${id}`);
        return response.data;

    },

    // 3. 질문 등록
    create: async (data: QuestionRequestDto) => {
        const response = await axiosInstance.post<QuestionResponseDto>('/api/questions/', data);
        return response.data;
    },

    // 4. 질문 수정
    update: async (id: number, data: QuestionRequestDto) => {
        const response = await axiosInstance.put<QuestionResponseDto>(`/api/questions/${id}`, data);
        return response.data;
    },

    // 5. 질문 삭제
    remove: async (id: number) => {
        await axiosInstance.delete(`/api/questions/${id}`);
    },

    // 6. 질문 추천
    vote: async (id: number) => {
        await axiosInstance.post(`/api/question/vote/${id}`);
    }
};