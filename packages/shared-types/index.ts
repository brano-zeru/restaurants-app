export interface UserDTO {
    id: string;
    username: string;
    email: string;
}

export interface UserResponseDTO {
    user: UserDTO & {
        iat: number,
        exp: number,
    }
}

export interface LoginRequestDTO {
    identifier: UserDTO['username'] | UserDTO['email'];
    password: string;
}
