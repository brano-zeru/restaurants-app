import type { UserDTO } from "@restaurants-app/types";
import { createContext } from "react";

interface AuthContextType {
    user: UserDTO | null;
    setUser: React.Dispatch<React.SetStateAction<UserDTO | null>>;
    isLoading: boolean;
    logout: VoidFunction;
    checkAuth: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
