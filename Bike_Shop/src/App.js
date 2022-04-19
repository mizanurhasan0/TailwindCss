import "./App.css";
import Navbar1 from "./components/Navbar/Navbar1";
import TopBanner from "./components/TopBanner/TopBanner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import HomePage from "./HomePage";

import Teams from "./components/Team Member/Teams";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <BrowserRouter>
        <TopBanner />
        <Navbar1 />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/bikes" exact element={<About />} />
          <Route path="/service" exact element={<Teams />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
