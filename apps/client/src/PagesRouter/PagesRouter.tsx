import { BrowserRouter, Routes } from "react-router-dom"
import { ROUTES } from "../routes"
import { ProtectedRoute } from "../components/auth/ProtectedRoute"
import type { FC } from "react"
import { Route } from "react-router-dom"
import { NotFound } from "../pages/NotFound"

export const PagesRouter: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
            {ROUTES.map((route) => {
                const element = route.isProtected ? (
                <ProtectedRoute>{route.element}</ProtectedRoute>
                ) : (
                route.element
                )
                return <Route key={route.path} path={route.path} element={element} />
            })}
            <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}