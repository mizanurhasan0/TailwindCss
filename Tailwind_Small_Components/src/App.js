
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Accordion_Horizon from "./components/Accordion/Accordion_Horizon";
import AutoResize from "./components/AutoResize/AutoResize";


import HeaderSlider from "./components/HeaderSlider/HeaderSlider";
import Limit_input from "./components/Limite_input_Field/Limit_input";
import Product_Horizontal_scrolling from "./components/Product_Horizontal_Scroll/Product_Horizontal_scrolling";
import Text_Typing from "./components/TextTyping/Text_Typing";
import Text_Color from "./components/Text_Color_Gradient/Text_Color";

function App() {
  return (
    <div>
      <HeaderSlider/>
      <Product_Horizontal_scrolling/>
      <Limit_input/>
      <Text_Color/>
      <Text_Typing/>
      <Accordion/>
      <AutoResize/>
    
    </div>
  );
}

export default App;
