import { CardProyect } from "../components/CardProyect"
import { proyects } from "../data/proyectData"


export const ProyectsPage = () => {
  return (
    <section className="p-5 bg-[#f1f1f1] pt-20" id="proyect">
        <p className="text-4xl md:text-6xl text-center font-extrabold text-[#2e2e2e]">Proyectos</p>
        <div className="md:flex md:flex-wrap md:justify-around">
            {
                proyects.map(proyect => (
                    <CardProyect proyect = {proyect} key = {proyect.id}/>
                ))
            }
        </div>
    </section>
  )
}
