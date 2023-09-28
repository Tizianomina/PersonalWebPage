import { NavBar } from "../components/NavBar";

import tiziano from "../asset/TizianoMJ.png";
import github from "../asset/github.png";
import linkedin from "../asset/linkedin.png";

const CV = "/public/CV-Tiziano-Mina.pdf"



export const HomePage = () => {

  const downloadCV = (url) => {
    // Obtener el nombre del archivo a partir de la URL
    const fileName = url.split("/").pop();
    // Crear un elemento <a> para el enlace de descarga
    const aTag = document.createElement("a");
    // Establecer la URL del enlace <a> con la URL proporcionada
    aTag.href = url;
    // Establecer el atributo download con el nombre del archivo
    aTag.setAttribute("download", fileName);
    // Agregar el enlace <a> al cuerpo del documento
    document.body.appendChild(aTag);
    // Simular un clic en el enlace <a> para iniciar la descarga
    aTag.click();
    // Eliminar el enlace <a> del documento después de la descarga
    aTag.remove();
  };

  return (
    <section className="bg-[#f7f7f7]">
      <NavBar />

      <section className=" p-5 md:h-screen">
        <div className="flex flex-col md:w-[90%] md:mx-auto space-y-7 md:flex-row md:items-center md:justify-between md:mt-20">
          <article className=" w-full space-y-6 md:flex md:flex-col md:h-full md:w-[700px] md:justify-center">
            <h1 className="text-4xl md:text-7xl text-[#2e2e2e] font-extrabold">
              Tiziano Joaquín Mina.
            </h1>
            <p className="text-2xl md:text-4xl text-[#2e2e2e]">
              Apasionado por la tecnología y el desarrollo web.
            </p>
            <button className="bg-[#FF6915] w-full text-[#fff] p-2 rounded-md text-2xl md:w-[70%] md:text-3xl md:font-semibold shadowContratar"
            onClick={()=> {
              downloadCV(CV)
            }}>
              Contrátame
            </button>
          </article>

          <article className="mx-auto md:mx-0 w-[280px]">
            <img
              src={tiziano}
              alt="Tiziano Joaquín Mina"
              className="rounded-xl"
            />
            <div className="w-[90%] mx-auto flex justify-between mt-2">
              <a href="https://www.linkedin.com/in/tiziano-mina/" className="">
                <img src={linkedin} alt="Linkedin" className="w-[50px] md:w-[40px] shadowLinkedin" />
              </a>
              <a href="https://github.com/Tizianomina?tab=repositories" className="">
                <img src={github} alt="Github" className="w-[50px] md:w-[40px] shadowGithub" />
              </a>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
};
