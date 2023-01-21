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
      href: "https://getkcal-nu.vercel.app/",
      gh: "https://github.com/gustamtz/getkcal",
    },
    {
      id: 2,
      src: edicoes,
      href: "https://side-services-gustamtz.vercel.app/",
      gh: "https://github.com/gustamtz/side-services",
    },
    {
      id: 3,
      src: organo,
      href: "https://organograma-ashen.vercel.app/",
      gh: "https://github.com/gustamtz/organograma",
    },
    {
      id: 4,
      src: weatherapp,
      href: "https://weather-app-chi-plum.vercel.app/",
      gh: "https://github.com/gustamtz/weather-app",
    },
  ];

  return (
    <div
      name="portfólio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-yellow-100">
            Portfólio
          </p>
          <p className="text-xl py-6">Visualize meus projetos.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, gh }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg duration-300 hover:scale-105"
            >
              <img src={src} alt="" className="rounded-t-xl" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 font-bold duration-200 hover:scale-110 hover:opacity-60">
                  <a rel="noreferrer" href={href} target="_blank">
                    Abrir
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 font-bold duration-200 hover:scale-110 hover:opacity-60">
                  <a rel="noreferrer" href={gh} target="_blank">
                    GitHub
                  </a>
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
