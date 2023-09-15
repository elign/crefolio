import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import Dashboard from "./pages/Dashboard"
import UserPage from "./pages/UserPage"
import Layout from "./Layout"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<UserPage />} />
      </Route>
    </Routes>
  )
}

export default App
