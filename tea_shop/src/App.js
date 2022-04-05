import "./App.css";
import TeaBag from "./assets/TEA-BAGS.png";

function App() {
  return (
    <div className="gradent">
      <header className="py-8 ml-5 mr-5">
        <nav
          className=" uppercase flex justify-between items-center
     text-gray-700"
        >
          <div className="font-semibold text-2xl">SoftwareBD</div>
          <div className="flex items-center  space-x-16 font-semibold text-[14px]">
            <a href="/" className="group relative">
              <div className="absolute w-full h-0.5 bg-gray-700 -bottom-0 scale-x-0 transition-transform group-hover:scale-x-100"></div>
              Flavor
            </a>
            <a className="group relative" href="/">
              <div className="absolute w-full h-0.5 bg-gray-700 -bottom-0 scale-x-0 transition-transform group-hover:scale-x-100"></div>
              Story
            </a>
            <a className="group relative" href="/">
              <div className="absolute w-full h-0.5 bg-gray-700 -bottom-0 scale-x-0 transition-transform group-hover:scale-x-100"></div>
              Blog
            </a>
            <a className="group relative" href="/">
              <div className="absolute w-full h-0.5 bg-gray-700 -bottom-0 scale-x-0 transition-transform group-hover:scale-x-100"></div>
              About Us
            </a>
          </div>
          <div className="flex space-x-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="relative">
              <div
                className="absolute bg-pink-400 -right-2 
              -top-2 text-white rounded-xl w-5 h-5
               flex items-center justify-center"
              >
                2
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>
        </nav>
      </header>
      <div className="flex flex-row  justify-center">
        <div className="w-[34%] flex flex-col  justify-center">
          <div className=" font-semibold text-xl">
            <h2 className="uppercase">How talking online orders</h2>
            <p className="font-medium text-[17px] font-sans mt-3">
              Green will be distracted by the readable content of a papge when
              looking at ots layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as oppsed to
              using 'Content here, content here', making it look like readbale
              English
            </p>
          </div>
          <div className="flex items-center py-5">
            <div className="w-3/5">
              <button
                className="group  relative hover:bg-[#7ad592] 
              h-10 w- px-5 rounded-md bg-gray-800 text-white"
              >
                <div
                  className="bg-gray-800 w-10 -top-0
                 -right-8 h-full transform rounded-tr-xl rounded-br-md
                 -skew-x-[20deg] mr-2 absolute group-hover:bg-[#7ad592]"
                ></div>
                Add to cart
              </button>
            </div>
            <div className="w-2/5">
              <h2 className="font-semibold text-2xl ">
                $4.97 <span className="text-sm">/kg</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="w-[30%] ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[115px] uppercase">BdTea</h1>
            <p className="text-4xl uppercase"> green tea</p>
          </div>
          <div className="w-full h-full object-cover hover:scale-105 transition-all">
            <img src={TeaBag} alt="" />
          </div>
        </div>
        <div className="w-[30%]">
          <div className=" h-full flex flex-col items-end justify-center space-y-36">
            <div
              className="relative bg-[#ffed8e] w-60 h-40 flex flex-col items-center 
            font-semibold text-md text-green-800 rounded-tl-3xl rounded-md z-50"
            >
              <div
                className="absolute bg-[#ffed8e] w-full h-32 -top-16 -left-0 transform 
             skew-y-[155deg] rounded-tl-xl rounded-tr-3xl -z-50"
              ></div>
              <div className="absolute -top-24 right-2 ">01</div>
              <p className="mt-3  uppercase">Ingredients</p>
              <h2 className="pt-5 ">100%</h2>
              <h4 className="mt-5">organic</h4>
            </div>
            <div className="relative bg-[#ffed8e] w-60 h-40 flex flex-col items-center 
            font-semibold text-md text-green-800 rounded-tl-3xl rounded-md z-50">
             <div className="absolute bg-[#ffed8e] w-full h-32 -top-16 -left-0 transform 
             skew-y-[155deg] rounded-tl-xl rounded-tr-3xl -z-50"></div>
              <div className="absolute -top-24 right-2 ">01</div>
              <p className="mt-3  uppercase">Ingredients</p>
              <h2 className="pt-5 ">100%</h2>
              <h4 className="mt-5">organic</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
