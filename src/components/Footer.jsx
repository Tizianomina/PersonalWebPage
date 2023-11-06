export const Footer = () => {
    return (
      <footer className="text-center py-4 bg-[#fcfcfc] flex flex-col justify-around  text-xl h-screen">
        <p>
          Gracias por visitarme. No dudes en conectarte conmigo en mi red de{" "}
          <a
            href="https://www.linkedin.com/in/tiziano-mina/"
            className="text-2xl text-[#ff7b00] font-bold hover:underline"
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
  