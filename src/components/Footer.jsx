export const Footer = () => {
    return (
      <footer className="text-center py-4 bg-gray-200 h-[300px] flex flex-col justify-center text-xl">
        <p>
          Gracias por visitarme. No dudes en conectarte conmigo en mi red de{" "}
          <a
            href="https://www.linkedin.com/in/tiziano-mina/"
            className="text-2xl text-[#064ACB] font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>.
        </p>
        <p className="mt-2 ">
          &copy; {new Date().getFullYear()} Tiziano Joaquín Mina. Todos los derechos reservados.
        </p>
      </footer>
    );
  };
  