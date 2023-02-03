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
    fefreshToken: string;
}

