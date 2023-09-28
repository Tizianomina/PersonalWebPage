import { Element } from "react-scroll"
import { Form } from "../components/Form"

export const ContactFormPage = () => {
  return (
    
    <section className="p-5 pt-20 bg-[#d8d8d8] mx-auto">
      <Element name="contact">
        <p className="text-4xl md:text-6xl text-center font-extrabold text-[#2e2e2e]">Contácto</p>
        <p className="text-center py-10">Si deseas contactarme, puedes hacerlo de manera secilla utilizando este formulario. Estoy a disposición para hacer que esta experiencia sea tan profesional como entretenida. ¡Espero tu mensaje!</p>
        <hr className="py-5"/>
        <Form />
    </Element>
    </section>

  )
}
