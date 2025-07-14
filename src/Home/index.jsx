import Header from "../Header/Header";
import { AboutUs } from "./components/AboutUs";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";

export const Home = () => {
  return (
    <div className="bg-white">
      <section>
        <Header />
      </section>
      <section>
        <AboutUs />
      </section>
      <div className="mb-11"></div>
      <section >
        <Gallery />
      </section>
      <section >
        <Testimonials />
      </section>
      <div className="mb-11"></div>
      <section>
        <Contact />
      </section>
      <div className="mb-11"></div>
    </div>
  );
};


