import React from "react";

const Sobre = () => {
  return (
    <div
      name="sobre"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-yellow-100">
            Sobre
          </p>
        </div>

        <p className="text-xl mt-2">
          Olá, meu nome é Gustavo Medeiros, tenho 19 anos e sou um desenvolvedor
          apaixonado por soluções simples para problemas difíceis. Além de
          entusiasta de métodos ágeis, ambientes flexíveis e entrega contínua.
          Atualmente estagio em uma software house, curso gestão da TI na
          Fatec-SP e sou aluno de programação na Alura!
        </p>

        <br />
      </div>
    </div>
  );
};

export default Sobre;
