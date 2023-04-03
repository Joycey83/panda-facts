import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Facts from "./components/Facts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <About />
        <Facts />
      </header>
    </div>
  );
}

export default App;
