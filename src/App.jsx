import { Footer } from "./components/Footer";
import { AboutPage } from "./pages/AboutPage";
import { ContactFormPage } from "./pages/ContactFormPage";
import { HomePage } from "./pages/HomePage";
import { ProyectsPage } from "./pages/ProyectsPage";
import { TecnoPages } from "./pages/TecnoPages";



export const App = () => {
  return (
    <>
      <HomePage />
      <AboutPage />
      <TecnoPages />
      <ProyectsPage />
      <ContactFormPage />
      <Footer />
    </>
  );
};
