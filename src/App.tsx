import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "./Pages/Team";
import Cards from "./Pages/Cards";
import NotFound from "./Pages/NotFound";
import ClubLayout from "./Components/Common/ClubLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClubLayout />}>
          <Route index element={<Team />} />
          <Route path="Cards" element={<Cards />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
