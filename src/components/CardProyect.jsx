export const CardProyect = ({ proyect }) => {
  return (
    <article className="bg-[#e6e6e6] py-4 w-full my-10 md:w-[400px] md:p-4 md:rounded-lg outline outline-8 outline-white">
      <img src={proyect.img} alt={proyect.name} className="md:rounded-lg" />
      <p className="text-center font-bold text-4xl py-3">{proyect.name}</p>
      <div className="w-full p-2 flex flex-col">
        <p className="text-justify  md:h-[100px] md:overflow-auto">
          {proyect.description}
        </p>
        <a href={proyect.page} className="bg-orange-500 w-full mt-5 p-2 text-center text-white text-3xl rounded-md shadowButtonCardVisitar">
          Visitar
        </a>
      </div>
    </article>
  );
};
