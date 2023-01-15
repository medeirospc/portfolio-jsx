import React from "react";
import getkcal from "../assets/portfolio/getkcal.png";
import edicoes from "../assets/portfolio/edicoes.png";
import organo from "../assets/portfolio/organo.png";
import weatherapp from "../assets/portfolio/weatherapp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: getkcal,
    },
    {
      id: 2,
      src: edicoes,
    },
    {
      id: 3,
      src: organo,
    },
    {
      id: 4,
      src: weatherapp,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-yellow-100">
            Portfólio
          </p>
          <p className="py-6">Visualize meus projetos aqui.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg duration-300 hover:scale-105"
            >
              <img src={src} alt="" className="rounded-t-xl" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 font-bold duration-200 hover:opacity-80 hover:text-yellow-100">
                  Abrir
                </button>
                <button className="w-1/2 px-6 py-3 m-4 font-bold duration-200 hover:opacity-80 hover:text-yellow-100">
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
