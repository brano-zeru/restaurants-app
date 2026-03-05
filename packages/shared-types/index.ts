export interface UserDTO {
    id: string;
    username: string;
    email: string;
}

export interface UserResponseDTO {
    user: Omit<UserDTO, 'password'> & {
        iat: number,
        exp: number,
    }
}

export interface LoginRequestDTO {
    identifier: UserDTO['username'] | UserDTO['email'];
    password: string;
}
