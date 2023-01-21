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
          Experiência em projetos front-end utilizando JavaScript, React e
          Tailwind CSS. Noções em back-end com Node.js, TypeScript, .NET 6 e
          MySQL na construção de APIs. Atualmente estagio em uma software house,
          curso Gestão da TI na Fatec-SP e sou aluno de programação e data
          science na Alura.
        </p>
        <p className="text-xl mt-6">
          Soft skills: Trabalho em equipe, comunicação, adaptabilidade,
          pensamento crítico e solução de problemas.
        </p>
        <br />
      </div>
    </div>
  );
};

export default Sobre;
