import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;