
import { useState } from "react";


export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="p-5 md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <span className="">
            <a href="#" className="text-4xl font-bold ">TizianoMJ</a>
        </span>

          <span
            className="text-3xl cursor-pointer md:hidden block mx-2"
            onClick={toggleMenu}
          >
            {menuOpen ? '✕' : '☰'}
          </span>
        </div>

        <ul
          className={`md:flex md:items-center bg-white  md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100   ${
            menuOpen ? 'opacity-100 h-screen' : ' opacity-0 top-[-400px]'
          } transition-all ease-in duration-500`}
        >
          <li className="mx-4 my-6 md:my-0 ">
            <a
              href=""
              className="text-2xl text-[#353535] font-medium hover:text-[#FF6915] duration-300"
            >
              Inicio
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              href=""
              className="text-2xl text-[#353535] font-medium hover:text-[#FF6915] duration-300"
            >
              Sobre Mí
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              href=""
              className="text-2xl text-[#353535] font-medium hover:text-[#FF6915] duration-300"
            >
              Tecnologías
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              href=""
              className="text-2xl text-[#353535] font-medium hover:text-[#FF6915] duration-300"
            >
              Proyectos
            </a>
          </li>
          <button className="bg-[#FF6915] text-2xl text-center w-[90%] md:w-52 py-2 px-6 rounded-3xl text-[#f7f7f7] font-semibold shadowContratar">
            Contáctame
          </button>
        </ul>
      </nav>
    </header>
  );
};

