import { Element } from "react-scroll";
import { CardProyect } from "../components/CardProyect";
import { proyects } from "../data/proyectData";

export const ProyectsPage = () => {
  return (
    <section className="bg-[#fcfcfc] md:p-8">
      <Element name="proyect">
        <p className="subtitle">Proyectos</p>
        <div className="flex flex-col md:flex-row md:justify-between md:flex-wrap ">
          {proyects.map((proyect) => (
            <CardProyect proyect={proyect} key={proyect.id} />
          ))}
        </div>
      </Element>
    </section>
  );
};
//  {
//   proyects.map(proyect => (
//     <CardProyect proyect = {proyect} key = {proyect.id}/>
// ))
// }
