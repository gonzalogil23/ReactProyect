import "./style.css";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <section className="home">
        <Home />
      </section>
    </div>
  );
}

export default App;
