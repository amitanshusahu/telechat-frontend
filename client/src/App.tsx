import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Chart from "./pages/Chat/Chart";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Chart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  )
}

function NotFound(){
  return <div style={{
    display: "flex",
    placeItems: "center",
    height: "100vh",
    width: "100vw",
    marginLeft: "30px"}}>

      <b>404</b> Bad Request :C

  </div>
}