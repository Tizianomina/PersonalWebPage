import { Element } from "react-scroll";

export const AboutPage = () => {
  return (
    <Element name="about">
      <section className="about">
        <h2 className="subtitle">Sobre Mí 👋</h2>
        <p className="text-justify text-lg text-[#292929] md:text-xl">
          Soy un Técnico en Programación y Desarrollador de Páginas Web. Soy de
          Córdoba Capital, Argentina. Mi enfoque se centra en el desarrollo
          utilizando React y pruebas de software. Actualmente, estoy completando
          mis estudios en el Instituto Superior Politécnico de Córdoba, donde me
          especializo en Desarrollo Web y Aplicaciones Digitales. Me considero
          una persona comprometida con mi trabajo y me esfuerzo continuamente
          por mejorar mis habilidades en diseño y desarrollo web, así como por
          identificar y resolver problemas de manera anticipada.
        </p>
      </section>
    </Element>
  );
};
