import { NavBar } from "../components/NavBar";

import tiziano from "../asset/TizianoMJ.png";
import github from "../asset/github.png";
import linkedin from "../asset/linkedin.png";

const CV = "/CV-Tiziano-Mina.pdf"

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
    <section className="bg-[#fcfcfc] mt-20">
      <NavBar />

      <section className="home">
        <article className="home__picture md:order-2">
          <img
            src={tiziano}
            alt="Tiziano Joaquín Mina"
            className="home__photo"
          />
          <div className="home__contact">
            <a href="https://www.linkedin.com/in/tiziano-mina/" className="">
              <img
                src={linkedin}
                alt="Linkedin"
                className="home__linkedin shadowLinkedin"
              />
            </a>
            <a
              href="https://github.com/Tizianomina?tab=repositories"
              className=""
            >
              <img
                src={github}
                alt="Github"
                className="home__github shadowGithub"
              />
            </a>
          </div>
        </article>
        <article className="home__iam md:order-1">
          <h1 className="home__title">Tiziano Joaquín Mina.</h1>
          <p className="home__subtitle">Apasionado por la tecnología y el desarrollo web.</p>
          <button className="home__btnCv shadowContratar" onClick={() => downloadCV(CV)}>
            Contrátame
          </button>
        </article>
      </section>
    </section>
  );
};
