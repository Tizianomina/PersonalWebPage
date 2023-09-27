import { CardTecno } from "../components/CardTecno";
import { technologies } from "../data/tecnoData";

export const TecnoPages = () => {
  return (
    <section className="p-5 pt-20 bg-[#fff]">
      <p className="text-4xl text-center md:text-6xl font-extrabold text-[#2e2e2e]">
        Tecnologías
      </p>

      <div className="md:flex md:flex-wrap md:justify-between">
        {technologies.map((technology) => (
          <CardTecno technology={technology} key={technology.id} />
        ))}
      </div>
    </section>
  );
};
