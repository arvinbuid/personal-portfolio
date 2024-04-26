import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className='max-w-3xl m-auto'>
        <Header />
        <Hero />
        <Skills />
        <section className='mx-6'>
          <Experiences />
          <Contact />
          <Projects />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
