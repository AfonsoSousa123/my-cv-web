import { useState } from "react";

// Sections Files
import About from "./sections/About.tsx";
import Featured from "./sections/Featured.tsx";
import Clients from "./sections/Clients.tsx";
import Services from "./sections/Services.tsx";
import Projects from "./sections/Projects.tsx";
import Contact from "./sections/Contact.tsx";
import Hero from "./sections/Hero.tsx";

// Components
import Header from "./components/Header.tsx";
import Loader from "./components/Loader.tsx";
import Footer from "./components/Footer.tsx";
import Skills from "./sections/Skills.tsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <>
      {isLoading && <Loader></Loader>}

      <Header></Header>

      <main>
        <Hero></Hero>
        <About></About>
        <Featured></Featured>
        <Skills></Skills>
        <Clients></Clients>
        <Services></Services>
        <Projects></Projects>
        <Contact></Contact>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
