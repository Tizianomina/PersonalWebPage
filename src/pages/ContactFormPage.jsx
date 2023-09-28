import { Form } from "../components/Form"

export const ContactFormPage = () => {
  return (
    <section className="p-5 pt-20 bg-[#d8d8d8] mx-auto">
        <p className="text-4xl md:text-6xl text-center font-extrabold text-[#2e2e2e]">Contácto</p>
        <p className="text-center py-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint obcaecati ipsa architecto et nobis nam fuga officiis possimus ad quam.</p>
        <hr className="py-5"/>
        <Form />
    </section>
  )
}
