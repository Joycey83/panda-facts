import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Facts from "./components/Facts";
import Habitat from "./components/Habitat";
import Predators from "./components/Predators";
import Threats from "./components/Threats";

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
        <Threats />
      </header>
    </div>
  );
}

export default App;
