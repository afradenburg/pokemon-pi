import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import DetailPokemon  from "./views/DetailPokemon";
import FormPage from "./views/FormPage";
import Home from "./views/Home";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={< LandingPage />} />
      <Route path="/home" element={< Home />} />
      <Route path="/home/:id" element={< DetailPokemon />} />
      <Route path="/formPage" element={< FormPage />} />
    </Routes>
  );
}

export default App;
