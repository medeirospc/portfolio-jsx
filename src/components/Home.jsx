import React from "react";
import MySelf from "../assets/myself.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Desenvolvedor JavaScript.
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            Clique no botão abaixo para ver meu porfólio.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
             from-yellow-400 to-yellow-800 cursor-pointer duration-300 hover:opacity-70"
            >
              Portfólio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={22} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={MySelf}
            alt="Gustavo"
            className="rounded-full mx-auto w-1/2 md:w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
