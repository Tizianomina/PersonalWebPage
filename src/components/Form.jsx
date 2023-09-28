export const Form = () => {
  return (
    <form action="">
      <div className="w-[90%] mx-auto space-y-5 flex flex-col items-center pb-28">
        <input
          type="text"
          placeholder="Ingrese su nombre"
          className="w-full p-2 rounded bg-[#f7f7f7]  outline-none  focusFormShadow"
          required
        />
        <input
          type="email"
          placeholder="Ingrese su correo"
          className="w-full p-2 rounded bg-[#f7f7f7]  outline-none  focusFormShadow"
          required
        />
        <textarea
          placeholder="Coloque su mensaje..."
          className="w-full h-[300px] p-2 rounded bg-[#f7f7f7]  outline-none  focusFormShadow"
          required
        ></textarea>
        <p className="text-xl text-center outline outline-orange-500">Su mensaje ha sido enviado con éxito. Agradezco su contacto y me pondré en comunicación con usted a la brevedad, lo antes posible.</p>
        <button className="bg-[#064ACB] text-white p-2 rounded-lg text-xl w-full md:w-[90%] text-center shadowButtonForm">
          Enviar
        </button>

      </div>
    </form>
  );
};
