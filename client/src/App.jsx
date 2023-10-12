import { Routes, Route, } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import DetailPokemon  from "./views/DetailPokemon";
import FormPage from "./views/FormPage";
import Home from "./views/Home";


function App() {
  
  return (
    <div className="AppRoutes">
    <Routes>
      <Route path="/" element={< LandingPage />} />
      <Route path="/home" element={< Home />} />
      <Route path="/home/:id" element={< DetailPokemon />} />
      <Route path="/formPage" element={< FormPage />} />
    </Routes>
    </div>
  );
}

export default App;
