import bike1 from "../assets/Component Img/bike1.jpg";
import bike2 from "../assets/Component Img/bike2.jpg";
import bike3 from "../assets/Component Img/bike3.jpg";
import bike4 from "../assets/Component Img/bike4.jpg";
import bike5 from "../assets/Component Img/bike5.jpg";

const slideClick = (i) => {
  alert("hello" + i);
};

const BikeData = [
  {
    image: `${bike1}`,
    title: "Cruiser",
    descrtiption: "The overview of",
    clickEvent: slideClick,
  },
  {
    image: `${bike2}`,
    title: "Sports",
    descrtiption: "This is description",
    clickEvent: slideClick,
  },
  {
    image: `${bike3}`,
    title: "Super Sports",
    descrtiption: "This is description",
    clickEvent: slideClick,
  },
  {
    image: `${bike4}`,
    title: "Scooter",
    descrtiption: "This is description",
    clickEvent: slideClick,
  },
  {
    image: `${bike5}`,
    title: "Commuter",
    descrtiption: "This is description",
    clickEvent: slideClick,
  },
];
export default BikeData;
