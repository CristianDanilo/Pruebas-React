
import {
    RiCloseLine,
    RiDeleteBin5Line,
  } from "react-icons/ri";

import React from "react";

const Car = (props) => {
  const { showOrder, setShowOrder} = props;
  
  return (
    <div
      className={`bg-[#1F1D2B] lg:col-span-2 fixed top-0 w-full h-full lg:w-96 lg:right-0  transition-all  z-50 ${
        showOrder ? "right-0" : "-right-full"
      }`}
    >
      {/* orders */}

      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full ">
        <RiCloseLine
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        <h1 className="text-2xl my-4">Orders #123242</h1>
        {/*  pills*/}
        <div className=" flex items-center gap-4 flex-wrap mb-8">
          <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
            Dine In
          </button>
          <button className=" text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
            To Go
          </button>
          <button className=" text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
            Delivery
          </button>
        </div>

        {/* Car */}
        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">Item</h5>
            <h5>Qty</h5>
            <h5>Price</h5>
          </div>
          {/* products */}
          <div className="h-[400px] md:h-[700px] lg:h-[540px] overflow-y-scroll">
            {/* product */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-2">
                {/* Product description */}
                <div className="col-span-4 flex items-center gap-3">
                  <img
                    src="plato1.png"
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h5 className="text-sm">Spaicy seaso...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div className="text-center">
                  <span>2</span>
                </div>
                {/* Prince */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center gap-2">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                    placeholder="Order note..."
                  />
                </form>
                <div className="col-span-1">
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBin5Line className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
            {/* product */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-2">
                {/* Product description */}
                <div className="col-span-4 flex items-center gap-3">
                  <img
                    src="plato1.png"
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h5 className="text-sm">Spaicy seaso...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div className="text-center">
                  <span>2</span>
                </div>
                {/* Prince */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center gap-2">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                    placeholder="Order note..."
                  />
                </form>
                <div className="col-span-1">
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBin5Line className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
            {/* product */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-2">
                {/* Product description */}
                <div className="col-span-4 flex items-center gap-3">
                  <img
                    src="plato1.png"
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h5 className="text-sm">Spaicy seaso...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div className="text-center">
                  <span>2</span>
                </div>
                {/* Prince */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center gap-2">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                    placeholder="Order note..."
                  />
                </form>
                <div className="col-span-1">
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBin5Line className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
            {/* product */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-2">
                {/* Product description */}
                <div className="col-span-4 flex items-center gap-3">
                  <img
                    src="plato1.png"
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h5 className="text-sm">Spaicy seaso...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div className="text-center">
                  <span>2</span>
                </div>
                {/* Prince */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center gap-2">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                    placeholder="Order note..."
                  />
                </form>
                <div className="col-span-1">
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBin5Line className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* submit payment */}
        <div className="bg-[#262837] absolute bottom-0 left-0 p-4 w-full">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400"> Discount</span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400">Subtotal</span>
            <span>$201.03</span>
          </div>
          <div>
            <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
              Continue to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
