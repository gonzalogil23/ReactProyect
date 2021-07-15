import "./style.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
// import ProductContainer from "./components/Product/ProductContainer";
import WineIndex from "./components/WineList/WineIndex";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <section className="home">
        <Home />
      </section>
      <section className="container catálogo">
        <WineIndex />
      </section>
    </div>
  );
}

export default App;
