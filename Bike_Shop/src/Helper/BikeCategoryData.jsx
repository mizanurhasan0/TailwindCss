import bike1 from "../assets/Component Img/bike1.jpg";
import bike2 from "../assets/Component Img/bike2.jpg";
import bike3 from "../assets/Component Img/bike3.jpg";
import bike4 from "../assets/Component Img/bike4.jpg";
import bike5 from "../assets/Component Img/bike5.jpg";

const slideClick = (i) => {
  alert("hello" + i);
};

const BikeCategoryData = [
  {
    cruiser: [
      {
        id: "5001",
        type: "None",
        name: "Intruder ABS Fi",
        price: "1550000",
        description:
          "The INTRUDER 155CC establishes Suzuki in the cruiser segment by giving a unique exposure to Suzuki’s international Intruder heritage",
        images: [{ bike1: `${bike1}` }, { bike2: `${bike2}` }],
      },
      {
        id: "5002",
        type: "None",
        name: "Intruder ABS",
        price: "1550000",
        description:
          "The INTRUDER 155CC establishes Suzuki in the cruiser segment by giving a unique exposure to Suzuki’s international Intruder heritage",
        images: [{ bike1: `${bike2}` }, { bike2: `${bike3}` }],
      },
    ],
    sports: [
      {
        id: "5003",
        type: "None",
        name: "Gixxer 155cc",
        price: "1550000",
        description:
          "The INTRUDER 155CC establishes Suzuki in the cruiser segment by giving a unique exposure to Suzuki’s international Intruder heritage",
        images: [{ bike1: `${bike3}` }, { bike2: `${bike4}` }],
      },
      {
        id: "5004",
        type: "None",
        name: "New Gixxer",
        price: "1550000",
        description:
          "The INTRUDER 155CC establishes Suzuki in the cruiser segment by giving a unique exposure to Suzuki’s international Intruder heritage",
        images: [{ bike1: `${bike1}` }, { bike2: `${bike2}` }],
      },
      {
        id: "5005",
        type: "None",
        name: "New Gixxer SF",
        price: "1550000",
        description:
          "The INTRUDER 155CC establishes Suzuki in the cruiser segment by giving a unique exposure to Suzuki’s international Intruder heritage",
        images: [{ bike1: `${bike2}` }, { bike2: `${bike4}` }],
      },
    ],
    supersports: [
      {
        id: "5006",
        type: "None",
        name: "Bandit",
        price: "1550000",
        description:
          "The INTRUDER 155CC establishes Suzuki in the cruiser segment by giving a unique exposure to Suzuki’s international Intruder heritage",
        images: [{ bike1: `${bike3}` }, { bike2: `${bike4}` }],
      },
      {
        id: "5007",
        type: "None",
        name: "GSX-150 Dual ABS",
        price: "1550000",
        description:
          "The INTRUDER 155CC establishes Suzuki in the cruiser segment by giving a unique exposure to Suzuki’s international Intruder heritage",
        images: [{ bike1: `${bike5}` }, { bike2: `${bike4}` }],
      },
    ],
    scooter: [
      {
        id: "5008",
        type: "None",
        name: "Access 125 Fi",
        price: "1550000",
        description:
          "The INTRUDER 155CC establishes Suzuki in the cruiser segment by giving a unique exposure to Suzuki’s international Intruder heritage",
        images: [{ bike1: `${bike3}` }, { bike2: `${bike4}` }],
      },
      {
        id: "5009",
        type: "None",
        name: "Burgman Street",
        price: "1550000",
        description:
          "The INTRUDER 155CC establishes Suzuki in the cruiser segment by giving a unique exposure to Suzuki’s international Intruder heritage",
        images: [{ bike1: `${bike1}` }, { bike2: `${bike2}` }],
      },
    ],
    commuter: [
      {
        id: "5010",
        type: "None",
        name: "GSX 125",
        price: "1550000",
        description:
          "The INTRUDER 155CC establishes Suzuki in the cruiser segment by giving a unique exposure to Suzuki’s international Intruder heritage",
        images: [{ bike1: `${bike3}` }, { bike2: `${bike4}` }],
      },
      {
        id: "5011",
        type: "None",
        name: "Samurai 150",
        price: "1550000",
        description:
          "The INTRUDER 155CC establishes Suzuki in the cruiser segment by giving a unique exposure to Suzuki’s international Intruder heritage",
        images: [{ bike1: `${bike1}` }, { bike2: `${bike2}` }],
      },
      {
        id: "5012",
        type: "None",
        name: "Hayate ep",
        price: "1550000",
        description:
          "The INTRUDER 155CC establishes Suzuki in the cruiser segment by giving a unique exposure to Suzuki’s international Intruder heritage",
        images: [{ bike1: `${bike3}` }, { bike2: `${bike4}` }],
      },
    ],
  },
];
export default BikeCategoryData;
