import emailjs from "emailjs-com";
import { useState } from "react";
import { useRef } from "react";

export const Form = () => {
  const refForm = useRef();
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_ogz9pmv";
    const templateId = "template_uwr3def";
    const apiKey = "FC-jM1QZCEeNHg1ZP";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => {
        console.log(result.text);
        setMensajeEnviado(true);
        setTimeout(() => setMensajeEnviado(false), 5000);
        refForm.current.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <form action="" onSubmit={handleSubmit} ref={refForm}>
      <div className="w-[90%] mx-auto space-y-5 flex flex-col items-center pb-28">
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="username"
          className="w-full p-2 rounded bg-[#f7f7f7]  outline-none  focusFormShadow"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Ingrese su correo"
          className="w-full p-2 rounded bg-[#f7f7f7]  outline-none  focusFormShadow"
          required
        />
        <textarea
          placeholder="Coloque su mensaje..."
          name="message"
          className="w-full h-[300px] p-2 rounded bg-[#f7f7f7]  outline-none  focusFormShadow"
          required
        ></textarea>
        {mensajeEnviado && (
          <p className="text-xl text-center outline outline-orange-500">
            Su mensaje ha sido enviado con éxito. Agradezco su contacto y me
            pondré en comunicación con usted a la brevedad, lo antes posible.
          </p>
        )}
        <button className="bg-[#064ACB] text-white p-2 rounded-lg text-xl w-full md:w-[90%] text-center shadowButtonForm">
          Enviar
        </button>
      </div>
    </form>
  );
};
