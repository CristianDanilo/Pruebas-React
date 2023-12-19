import { useState } from "react";
import {
  RiMenuLine,
  RiMapPinUserLine,
  RiPieChartLine,
  RiLightbulbFlashLine,
  RiCloseLine,
  RiSearch2Line,
  RiArrowDownSLine,
  RiDeleteBin5Line,
}
from "react-icons/ri";
import { Sindebar } from "./components/shared/Sindebar";
import Card from "./components/shared/Card";


function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };
  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };
  return (
    <div className="bg-[#262837] w-full min-h-screen ">
      <Sindebar showMenu={showMenu} />
      <Card></Card>
      {/* menu movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-4xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button>
          <RiMapPinUserLine className="p-2"></RiMapPinUserLine>
        </button>
        <button>
          <RiPieChartLine className="p-2"></RiPieChartLine>
        </button>
        <button onClick={toggleOrders}>
          <RiLightbulbFlashLine className="p-2"></RiLightbulbFlashLine>
        </button>
        <button onClick={toggleMenu} className="text-white  p-2">
          {showMenu ? <RiCloseLine /> : <RiMenuLine />}
        </button>
      </nav>
      <main className="lg:pl-32 pr-96 pb-20">
        <div className=" md:p-8 p-4">
          {/* Header */}
          <header>
            {/* Title and search */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div className="">
                <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
                <p className="text-gray-500">16 diciembre 2023</p>
              </div>
              <form action="">
                <div className="w-full relative">
                  <RiSearch2Line className="absolute  left-4 top-1/2 -translate-y-1/2 text-gray-300"></RiSearch2Line>
                  <input
                    type="text"
                    className="bg-[#1F1D2B] w-full py-2 pl-12 pr-4 rounded-lg text-gray-300 outline-none"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            {/* tabs */}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
              <a
                href="#"
                className="relative py-2 pr-4 before:w-1/2 before:h-1 before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:bottom-[1px] text-[#ec7c6a]"
              >
                Hot dishes
              </a>
              <a href="#" className="py-2 pr-4  ">
                Cold dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Soup
              </a>
              <a href="#" className="py-2 pr-4">
                Grill
              </a>
            </nav>
          </header>
          {/* title content */}
          <div className=" flex items-center justify-between mb-16 ">
            <h2 className="text-xl text-gray-300 ">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="public\plato1.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy Seasoned seafood nodles</p>
              <span className="text-gray-400">$2,29</span>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="public\plato1.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy Seasoned seafood nodles</p>
              <span className="text-gray-400">$2,29</span>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="public\plato1.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy Seasoned seafood nodles</p>
              <span className="text-gray-400">$2,29</span>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="public\plato1.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy Seasoned seafood nodles</p>
              <span className="text-gray-400">$2,29</span>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="public\plato1.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy Seasoned seafood nodles</p>
              <span className="text-gray-400">$2,29</span>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="public\plato1.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy Seasoned seafood nodles</p>
              <span className="text-gray-400">$2,29</span>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
          </div>
        </div>


      </main>
    </div>
  );
}

export default App;
