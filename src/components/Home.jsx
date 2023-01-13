import React from "react";
import MySelf from "../assets/myself.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Desenvolvedor JavaScript.
          </h2>
          <p className="text-gray-500 py-4">Eu sou desenvolvedor JavaScript.</p>
          <div>
            <button>
              Portfólio
              <span>
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={MySelf}
            alt="Gustavo"
            className="rounded-full mx-auto w-2/3 md:w-72"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
