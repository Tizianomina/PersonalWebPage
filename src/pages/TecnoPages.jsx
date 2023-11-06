import { Element } from "react-scroll";
import { CardTecno } from "../components/CardTecno";
import { technologies } from "../data/tecnoData";

export const TecnoPages = () => {
  return (
    <section className="technology" >
      <Element name="tecno">
      <p className="subtitle">
        Tecnologías
      </p>

      <div className="md:flex md:flex-wrap md:justify-between">
        {technologies.map((technology) => (
          <CardTecno technology={technology} key={technology.id} />
        ))}
      </div>
      </Element>
    </section>
  );
};
