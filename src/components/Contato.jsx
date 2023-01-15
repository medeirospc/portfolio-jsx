import React from "react";

const Contato = () => {
  return (
    <div
      name="contato"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-yellow-100">
            Contato
          </p>
          <p className="py-6">Entre em contato comigo!</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/48b528a1-5778-4dc6-9ce5-1dd3cb898702"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              required={true}
              placeholder="Digite seu nome"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              required={true}
              placeholder="Digite seu email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="mensagem"
              required={true}
              placeholder="Digite sua mensagem"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              className="text-white bg-gradient-to-b from-yellow-400 to-yellow-800 px-6 
            py-3 my-8 mx-auto flex items-center rounded-md hover:opacity-70 duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato;
