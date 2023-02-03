export interface UserLogin {
    email: String;
    password: String;
}

export interface UserSignup {
    name: String;
    email: String;
    password: String;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
}

export interface SignUpResponse {
    status: string;
    message: string;
}

