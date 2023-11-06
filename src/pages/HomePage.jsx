import { NavBar } from "../components/NavBar";

import tiziano from "../asset/TizianoMJ.png";
import github from "../asset/github.png";
import linkedin from "../asset/linkedin.png";

export const HomePage = () => {
  return (
    <section className="bg-[#fcfcfc] ">
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
          <button className="home__btnCv shadowContratar">
            Contrátame
          </button>
        </article>
      </section>
    </section>
  );
};
