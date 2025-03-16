
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";

import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import About from './components/About';
import Outils from './components/Outils';
import Parcours from './components/Parcours';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Outils/>
      <Parcours/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;