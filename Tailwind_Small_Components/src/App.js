import "./App.css";
import FlipCard from "./components/3d Flip Card/FlipCard";
import Accordion from "./components/Accordion/Accordion";
import Accordion_Horizon from "./components/Accordion/Accordion_Horizon";
import AutoResize from "./components/AutoResize/AutoResize";
import Grid from "./components/Grid/Grid";

import HeaderSlider from "./components/HeaderSlider/HeaderSlider";
import Limit_input from "./components/Limite_input_Field/Limit_input";
import Navbar1 from "./components/Navbar/Navbar1";
import Navbar2 from "./components/Navbar/Navbar2";
import Product_Horizontal_scrolling from "./components/Product_Horizontal_Scroll/Product_Horizontal_scrolling";
import TabSlide2 from "./components/Tab Slide/TabSlide2";
import TabSlider from "./components/Tab Slide/TabSlider";
import Text_Typing from "./components/TextTyping/Text_Typing";
import Text_Color from "./components/Text_Color_Gradient/Text_Color";

function App() {
  return (
    <div>
      <HeaderSlider />
      <Product_Horizontal_scrolling />
      <Limit_input />
      <Text_Color />
      <Text_Typing />
      <Accordion />
      <AutoResize />
      <TabSlide2 />
      <Grid />
      <FlipCard />
      <Navbar1 />
      <Navbar2 />
    </div>
  );
}

export default App;
