import { AppRouter } from "./router/AppRouter"
import { AppNavbar } from "./shared/components/Navbar"

function App() {

  return (
    <>
      <AppNavbar></AppNavbar>
      <div className="app-container">
        <AppRouter></AppRouter>
      </div>
    </>
  )
}

export default App
