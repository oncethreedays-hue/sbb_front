import { axiosInstance } from "./axiosInstance";
import type { UserCreateRequestDto, UserLoginRequestDto, UserLoginResponsDto  } from "../types";

export const userApi = {
    // 회원 가입
    signup: async (data: UserCreateRequestDto) => {
        const response = await axiosInstance.post('/api/user/signup', data);
        return response.data;
    },

    // 로그인
    login: async (data: UserLoginRequestDto) => {
        const response = await axiosInstance.post<UserLoginResponsDto>('/api/user/login', data);
        return response.data
    },

    // 토큰 재발급
    reissue: async (refreshToken: String) => {
        const response = await axiosInstance.post('/api/user/reissue', { refreshToken });
        return response.data
    }

}