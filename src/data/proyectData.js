import miPagina from "../asset/personalPage.png";
import heroe from "../asset/Heroes.png";
import gifs from "../asset/gifs.png";
import memory from "../asset/Memory.png";
import cine from "../asset/peliculas.png";
import airbnb from "../asset/photoairbnb.png";

export const proyects = [
  {
    id: 5,
    name: "Clone Airbnb",
    page: "https://c14-02-m-node-react.vercel.app/",
    description: "proyecto Clon Airbnb trabajado en equipo y aplicando la metodología SCRUM. Este proyecto se realizo en NoCountry para realizar un trabajo en equipo y asi mejorando nuestras habilidades técnicas y blandas.",
    img: airbnb,
  },
  {
    id: 0,
    name: "CinesApp",
    page: "https://mycine.netlify.app/",
    description: "Primer proyecto consumiendo la API llamada TheMovieDB. Este proyecto fue mi primer contacto con el manejo de rutas y obteniendo datos de una API para crear una web de películas",
    img: cine,
  },
  {
    id: 1,
    name: "TizianoMJ",
    page: "https://tiziano-mina.netlify.app",
    description: "Mi página web personal en la cual permite conocerme y mostrar los proyectos en los cuales aplico mis conocimientos y demuestro avances en ellos",
    img: miPagina,
  },
  {
    id: 2,
    name: "HeroesApp",
    page: "https://heroes-marvel-dc-tizianomj.netlify.app/login",
    description: "Proyecto para manejar la autenticación, rutas públicas y privadas con React",
    img: heroe,
  },
  {
    id: 3,
    name: "GifApp",
    page: "https://appgif2023.netlify.app/",
    description: "Proyecto realizado para consumir API llamada Giphy obteniendo los gifs y mostrandolos cuadno el usuario realice una busqueda",
    img: gifs,
  },
  {
    id: 4,
    name: "Memory",
    page: "https://tizianomina.github.io/Memory/",
    description: "Primer proyecto desarrollado con JavaScript",
    img: memory,
  },
  
];
