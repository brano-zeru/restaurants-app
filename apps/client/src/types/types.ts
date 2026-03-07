import type { LoginRequestDTO, UserDTO } from "@restaurants-app/types";
import { Pages } from "../consts/consts";

export type Page = typeof Pages[keyof typeof Pages];

export interface Api {
    me: () => Promise<{user: UserDTO | null}>;
    signup: (username: string, email: string, password: string) => Promise<{user: UserDTO, message: string}>;
    signin: ({identifier, password}: LoginRequestDTO) => Promise<{user: UserDTO | null, message: string}>;
    logout: () => Promise<{message: string}>;
}