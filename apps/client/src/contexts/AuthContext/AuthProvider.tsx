import type { UserDTO } from "@restaurants-app/types";
import { useCallback, useEffect, useState, type FC } from "react";
import { api } from "../../api";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<UserDTO | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const checkAuth = useCallback(async () => {
        setIsLoading(true);
        try {
            const {user} = await api().me();
            setUser(user);
        } catch (error) {
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const logout = useCallback(async () => {
        await api().logout()
        setUser(null);
    }, []);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            isLoading,
            checkAuth,
            logout
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}