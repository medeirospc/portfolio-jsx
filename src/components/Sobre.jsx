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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          voluptatum sint quasi est unde, molestiae fugit aut atque
          necessitatibus non autem nesciunt quisquam ipsa placeat consectetur
          nostrum voluptatem nemo excepturi enim dolorem cupiditate architecto
          doloremque! Sunt dolorem modi autem? Libero?
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ab
          minus sequi. Molestias ducimus omnis repellendus eligendi eaque,
          fugiat, voluptatum doloribus assumenda suscipit vero aperiam corporis
          cumque. Animi sunt dolore quaerat sequi corporis nam distinctio
          libero, praesentium natus quisquam molestiae quidem iusto! Voluptas
          aliquam minus, doloribus nulla deserunt cumque natus?
        </p>
      </div>
    </div>
  );
};

export default Sobre;
