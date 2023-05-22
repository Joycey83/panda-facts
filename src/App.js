import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Facts from "./components/Facts";
import Habitat from "./components/Habitat";
import Predators from "./components/Predators";
import MajorThreats from "./components/MajorThreats";
import PandaVideo from "./components/PandaVideo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <About />
        <Facts />
        <Habitat />
        <Predators />
        <MajorThreats />
        <PandaVideo />
        <Footer />
      </header>
    </div>
  );
}

export default App;
