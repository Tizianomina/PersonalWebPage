
export const CardProyect = ({proyect}) => {
  return (
    <article className="w-[320px] md:w-[300px] outline outline-white p-2 bg-[#D8D9DA] mx-auto  my-10 rounded-md">
        <img src={proyect.img} alt={proyect.name} className="bg-cover rounded-md"/>
        <p className="text-center pt-5 text-2xl font-bold text-[#2e2e2e]">{proyect.name}</p>
        <div className="flex flex-col text-center ">
            <a href={proyect.page} className=" py-2 px-8 text-xl font-semibold rounded mt-5 bg-[#FD8D14] text-white shadowButtonCardVisitar">Visitar</a>
            <a href={proyect.code} className=" py-2 px-8 text-xl font-semibold rounded mt-5 bg-[#fff] text-[#FD8D14] shadowButtonCardCodigo">Código</a>
        </div>
    </article>
  )
}
