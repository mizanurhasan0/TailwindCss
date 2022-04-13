import Ac from "../assets/Component Img/Ac_Service.jpg";
import Tv from "../assets/Component Img/Tv.jpg";
import refre from "../assets/Component Img/refregarator.jpg";
import electric from "../assets/Component Img/electrict.jpg";
import headerSlider from "../assets/Component Img/header slider.PNG";

const slideClick = (i) => {
  alert("hello" + i);
};

const JsonData = [
  {
    image: `${Ac}`,
    title: "Effective way for walk",
    descrtiption: "The overview of",
    clickEvent: slideClick,
  },
  {
    image: `${Tv}`,
    title: "Effective way for walk",
    descrtiption: "This is description",
    clickEvent: slideClick,
  },
  {
    image: `${refre}`,
    title: "This is title",
    descrtiption: "This is description",
    clickEvent: slideClick,
  },
  {
    image: `${electric}`,
    title: "This is title",
    descrtiption: "This is description",
    clickEvent: slideClick,
  },
  {
    image: `${headerSlider}`,
    title: "This is title",
    descrtiption: "This is description",
    clickEvent: slideClick,
  },
  {
    image: `${Ac}`,
    title: "This is title",
    descrtiption: "This is description",
    clickEvent: slideClick,
  },
];
export default JsonData;
