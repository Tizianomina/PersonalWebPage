export const CardTecno = ({ technology }) => {
  return (
    <article className=" w-[250px] mx-auto  text-center  my-10 bg-[#f1f1f1] rounded-xl p-4 space-y-5 flex flex-col justify-around">
      <img
        src={technology.img}
        alt={technology.name}
        className="mx-auto w-[100px]"
      />
      <div className="space-y-3">
        <p className="text-2xl font-bold text-[#2e2e2e]">{technology.name}</p>
        <p className="">{technology.level}</p>
      </div>
    </article>
  );
};
