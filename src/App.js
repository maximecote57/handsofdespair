import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Epk from "./epk";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/epk" element={<Epk />} />
    </Routes>
  );
}

export default App;
