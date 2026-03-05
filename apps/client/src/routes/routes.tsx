import { Pages } from "../consts"
import { Auth, Login, Signup } from "../pages"
import { type Page } from "../types"
import { Home } from "../pages/Home"

type Route = {
    page: Page,
    path: string,
    element: React.ReactNode
    isProtected: boolean
}

export const ROUTES: Route[] = [
    { page: Pages.HOME, path: '/', element: <Home/>, isProtected: true},
    { page: Pages.AUTH, path: "/auth", element: <Auth />, isProtected: false },
    { page: Pages.LOGIN, path: "/login", element: <Login />, isProtected: false },
    { page: Pages.SIGNUP, path: "/signup", element: <Signup />, isProtected: false },
]

export const getPath = (page: Page) => {
    return ROUTES.find((route) => route.page === page)?.path || "/";
}