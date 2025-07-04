import Navbar from "./pages/components/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Materials from "./pages/materials";
import Realisations from "./pages/realisations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRealisation from "./pages/add-realisation";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/add-realisation" element={<AddRealisation />} />
      </Routes>
    </Router>
  );
}

export default App;
