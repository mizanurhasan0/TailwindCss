import "./App.css";
import AllCategory from "./components/Categorys/AllCategory";
import Footer from "./components/Footer/Footer";
import HeaderSlide from "./components/HeaderSliders/HeaderSlide";
import Navbar1 from "./components/Navbar/Navbar1";
import TopBanner from "./components/TopBanner/TopBanner";
function App() {
  return (
    <div>
      <TopBanner />
      <Navbar1 />
      <HeaderSlide />
      <AllCategory />
      <Footer />
    </div>
  );
}

export default App;
