import React from "react";

const Sobre = () => {
  return (
    <div
      name="sobre"
      className="w-full h-screen bg-gradient-to-b from-zinc-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-gray-500">
            Sobre
          </p>
        </div>
        <p className="text-xl mt-2">
          Experiência em projetos front-end utilizando JavaScript, React e
          Tailwind CSS. Noções em back-end com Node.js, TypeScript, MongoDB,
          .NET 6 e MySQL Workbench na construção de APIs. Conhecimentos em
          Pacote Office. Atualmente estou buscando uma oportunidade de estágio
          ou vaga Jr. em desenvolvimento de software, dados e gestão no setor de
          tecnologia.
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
