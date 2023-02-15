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
          Tailwind CSS. Noções em back-end com Node.js, MongoDB, .NET 6 e MySQL
          Workbench na construção de APIs. Conhecimentos em Pacote Office,
          Quality Assurance e metodologias ágeis como Scrum. Além de ser editor
          de vídeo usando VEGAS e Premiere.
        </p>
        <p className="text-xl mt-6">
          Possuo um perfil analítico e muito detalhista, trabalho bem em equipe,
          sou ambicioso por meu desenvolvimento profissional e estou me
          aprimorando em técnicas para melhorar minha comunicação.
        </p>
        <br />
      </div>
    </div>
  );
};

export default Sobre;
