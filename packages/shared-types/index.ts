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

const statuses = {
    INTERNAL_SERVER_ERROR: 500,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
} as const

export class AppError extends Error {
    public readonly status: number;

    public constructor(status: number = statuses.INTERNAL_SERVER_ERROR, message: string) {
        super(message)
        this.status = status;

        Object.setPrototypeOf(this, new.target.prototype)
    }
}

export class FailedLoginError extends AppError {
    public constructor() {
        super(statuses.UNAUTHORIZED, 'Failed to login, invalid username or password')
        Object.setPrototypeOf(this, new.target.prototype)
    }
}