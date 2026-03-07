import { AuthProvider } from "./contexts/AuthContext/AuthProvider"
import { PagesRouter } from "./PagesRouter"
import "./styles/main.scss"

function App() {
  return (
    <AuthProvider>
        <PagesRouter />
    </AuthProvider>
  )
}

export default App
