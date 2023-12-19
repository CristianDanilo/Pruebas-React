import React from "react";
import {
  RiHome2Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiNotification2Line,
  RiSettings5Line,
  RiLogoutBoxRLine,
} from "react-icons/ri";

export const Sindebar = (props) => {
  const { showMenu } = props;
  return (
    <div
      className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}>
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="tex-2x1 text-gray-300 uppercase font-bold text-center my-5">
              Logo
            </h1>
          </li>
          <li className="bg-[#262837] p-2 rounded-tl-xl rounded-bl-xl h-15">
            <a
              href="#"
              className="bg-[#ec7c6a] flex justify-center rounded-xl text-white h-10"
            >
              <RiHome2Line className="text-3xl pt-2" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-2 rounded-tl-xl rounded-bl-xl h-15 group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] flex justify-center rounded-xl text-[#ec7c6a] h-10 group-hover:text-white transition-colors"
            >
              <RiPercentLine className="text-3xl pt-2" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-2 rounded-tl-xl rounded-bl-xl h-15 group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] flex justify-center rounded-xl text-[#ec7c6a] h-10 group-hover:text-white transition-colors"
            >
              <RiPieChartLine className="text-3xl pt-2" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-2 rounded-tl-xl rounded-bl-xl h-15 group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] flex justify-center rounded-xl text-[#ec7c6a] h-10 group-hover:text-white transition-colors"
            >
              <RiMailLine className="text-3xl pt-2" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-2 rounded-tl-xl rounded-bl-xl h-15 group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] flex justify-center rounded-xl text-[#ec7c6a] h-10 group-hover:text-white transition-colors"
            >
              <RiNotification2Line className="text-3xl pt-2" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-2 rounded-tl-xl rounded-bl-xl h-15 group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] flex justify-center rounded-xl text-[#ec7c6a] h-10 group-hover:text-white transition-colors"
            >
              <RiSettings5Line className="text-3xl pt-2" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#262837] p-2 rounded-tl-xl rounded-bl-xl h-15 group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] flex justify-center rounded-xl text-[#ec7c6a] h-10 group-hover:text-white transition-colors"
            >
              <RiLogoutBoxRLine className="text-3xl pt-2" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
