import "./style.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ProductContainer from "./components/Product/ProductContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <section className="home">
        <Home />
      </section>
      <section>
        <ProductContainer />
      </section>
    </div>
  );
}

export default App;
