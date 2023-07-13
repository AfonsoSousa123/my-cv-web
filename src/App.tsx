// Css Files
import "./assets/css/magnific-popup.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/templatemo-first-portfolio-style.css";
import "./assets/css/bootstrap-icons.css";
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

// JS files
import "./assets/js/bootstrap.min.js";
import "./assets/js/jquery.min.js";
import "./assets/js/custom.js";
import "./assets/js/click-scroll.js";
import "./assets/js/jquery.magnific-popup.min.js";
import "./assets/js/jquery.sticky.js";
import "./assets/js/magnific-popup-options.js";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <>
      {isLoading && <Loader></Loader>}

      <Header></Header>

      <main>
        <Hero></Hero>
        <About></About>
        <Featured></Featured>
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
