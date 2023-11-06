import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleLinkClick = () => {
    setTimeout(() => {
      setNavbarOpen(false);
    }, 1000);
  };

  useEffect(() => {
    if (navbarOpen) {
      // Cuando el modal se abre, deshabilita el scroll
      document.body.style.overflow = "hidden";
    } else {
      // Cuando el modal se cierra, habilita el scroll
      document.body.style.overflow = "visible";
    }
  }, [navbarOpen]);



  return (
    <header className="">
      <nav className="font-bold md:flex md:items-center md:justify-around md:py-5 fixed top-0 left-0 w-full bg-[#fcfcfc]">
        <div className="p-4 flex justify-between items-center ">
          <a className="text-3xl">TizianoMJ</a>
          <span
            className="text-3xl md:hidden cursor-pointer"
            onClick={toggleNavbar}
          >
            {navbarOpen ? "✕" : "☰"}
          </span>
        </div>

        {navbarOpen ? (
          <div className="containerModal">
            <a className="linksModal">Inicio</a>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
            >
              <a className="linksModal">Sobre mi</a>
            </ScrollLink>
            <ScrollLink
              to="tecno"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
            >
              <a className="linksModal">Tecnologías</a>
            </ScrollLink>
            <ScrollLink
              to="proyect"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
            >
              <a className="linksModal">Proyectos</a>
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
            >
              <button className="bg-orange-500 w-[70%] mx-auto font-bold text-2xl p-6 text-white rounded-lg">
                Contáctame
              </button>
            </ScrollLink>
          </div>
        ) : (
          <div className="containerNavBar">
            <ScrollLink
              to="inicio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleLinkClick}
            >
              <a className="linkNavBar">Inicio</a>
            </ScrollLink>

            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleLinkClick}
            >
              <a className="linkNavBar">Sobre mi</a>
            </ScrollLink>

            <ScrollLink
              to="tecno"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleLinkClick}
            >
              <a className="linkNavBar">Tecnologías</a>
            </ScrollLink>

            <ScrollLink
              to="proyect"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleLinkClick}
            >
              <a className="linkNavBar">Proyectos</a>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={handleLinkClick}
            >
              <button className="text-2xl ml-5 bg-orange-500 p-3 text-white rounded-xl">
                Contáctame
              </button>
            </ScrollLink>
          </div>
        )}
      </nav>
    </header>
  );
};
