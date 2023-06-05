import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClubLayout from "./Components/Common/ClubLayout/ClubLayout";
import Team from "./Pages/Team";
import Cards from "./Pages/Cards/Index";
import NotFound from "./Pages/NotFound/NotFound";

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
