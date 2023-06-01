import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "./Pages/Team";
import Cards from "./Pages/Cards";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Team />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
