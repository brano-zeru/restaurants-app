import { type FC } from "react";
import { Navigate } from "react-router-dom";
import { Pages } from "../../consts";
import { getPath } from "../../routes";
import { useAuth } from "../../contexts/AuthContext/useAuth";

interface ProtectedRouteProps {
    children: React.ReactNode
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({children}) => {
    const {user, isLoading} = useAuth()
    
    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!user) {
        return <Navigate to={getPath(Pages.AUTH)} replace />
    }

    return children
}