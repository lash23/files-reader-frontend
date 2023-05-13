import { Navigate, Route, Routes } from "react-router-dom"
import { Files } from "../modules/files/pages/Files"


export const AppRouter = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={ <Files /> } />
        <Route path="/*" element={ <Navigate to="/"/> } />
      </Routes>
    </>
  )
}