export interface UserCreateRequestDto {
    username: string;
    password1: string;
    password2: string;
    email: string;
}

export interface UserLoginRequestDto {
    username: string;
    password: string
}