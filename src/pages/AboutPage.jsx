import { Element } from "react-scroll";

export const AboutPage = () => {
  return (
    <section className="pt-20 md:pt-0 p-5 space-y-10 w-full md:h-screen flex flex-col justify-center bg-[#f1f1f1] ">
      <Element name="about">
      <h2 className="text-4xl md:text-6xl font-extrabold text-[#2e2e2e]">Sobre Mí 👋</h2>
      <p className="text-2xl text-justify font-medium text-[#2e2e2e]">
        Soy un Técnico en Programación y Desarrollador de Páginas Web. Soy de
        Córdoba Capital, Argentina. Mi enfoque se centra en el desarrollo
        utilizando React y pruebas de software. Actualmente, estoy completando
        mis estudios en el Instituto Superior Politécnico de Córdoba, donde me
        especializo en Desarrollo Web y Aplicaciones Digitales. Me considero una
        persona comprometida con mi trabajo y me esfuerzo continuamente por
        mejorar mis habilidades en diseño y desarrollo web, así como por
        identificar y resolver problemas de manera anticipada.
      </p>
    </Element>
    </section>
  );
};
