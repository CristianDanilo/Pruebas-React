import { useState } from "react";
import {
  RiMenuLine,
  RiMapPinUserLine,
  RiPieChartLine,
  RiLightbulbFlashLine,
  RiCloseLine,
  RiArrowDownSLine,
}
from "react-icons/ri";
//Conponents
import { Sindebar } from "./components/shared/Sindebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
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
      <Car showOrder={showOrder} setShowOrder={setShowOrder}></Car>
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
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className=" md:p-8 p-4">
          {/* Header */}
          <Header></Header>
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
              <Card img="public\plato1.png" description="Speacy Seasoned seafood nodles" price="2,29" inventory="20"></Card>
              <Card img="public\plato1.png" description="Speacy Seasoned seafood nodles" price="2,29" inventory="20"></Card>
              <Card img="public\plato1.png" description="Speacy Seasoned seafood nodles" price="2,29" inventory="20"></Card>
              <Card img="public\plato1.png" description="Speacy Seasoned seafood nodles" price="2,29" inventory="20"></Card>
              <Card img="public\plato1.png" description="Speacy Seasoned seafood nodles" price="2,29" inventory="20"></Card>
              <Card img="public\plato1.png" description="Speacy Seasoned seafood nodles" price="2,29" inventory="20"></Card>
              
          </div>
        </div>


      </main>
    </div>
  );
}

export default App;
