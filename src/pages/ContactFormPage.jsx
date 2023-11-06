import { Element } from "react-scroll"
import { Form } from "../components/Form"

export const ContactFormPage = () => {
  return (
    
    <section className="p-5 pt-20 bg-[#fcfcfc] mx-auto">
      <Element name="contact">
        <p className="subtitle">Contácto</p>
        <p className="text-justify py-10 md:text-xl">Si deseas contactarme, puedes hacerlo de manera secilla utilizando este formulario. Estoy a disposición para hacer que esta experiencia sea tan profesional como entretenida. ¡Espero tu mensaje!</p>
        <hr className="py-5"/>
        <Form />
    </Element>
    </section>

  )
}
