import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Skills from "./Components/Skills";

function App() {
 
  return (
    <div className="bg-[#0f172a] font-sans text-slate-200 font-bold tracking-tight">
      <Navbar/>
      <Home/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
