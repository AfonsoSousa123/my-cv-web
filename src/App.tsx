import { useState } from "react";

// Sections Files
import About from "./sections/About.tsx";
import Featured from "./sections/Featured.tsx";
// import Services from "./sections/Services.tsx";
import Projects from "./sections/Projects.tsx";
import Contact from "./sections/Contact.tsx";
import Hero from "./sections/Hero.tsx";

// Components
import Header from "./components/Header.tsx";
import Loader from "./components/Loader.tsx";
import Footer from "./components/Footer.tsx";
import Skills from "./sections/Skills.tsx";
import ScrollButton from "./components/ScrollButton.tsx";
import Companies from "./sections/Companies.tsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  // useEffect(() => {
  //   // removes the spinner indicator
  //   window.onload = () => {
  //     setIsLoading(false);
  //   };
  // }, []);

  return (
    <>
      {isLoading && <Loader></Loader>}
      <Header></Header>
      <main>
        <Hero></Hero>
        <About></About>
        <Featured></Featured>
        <Skills></Skills>
        <Companies></Companies>
        {/*<Services></Services>*/}
        <Projects></Projects>
        <Contact></Contact>
        <ScrollButton></ScrollButton>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
