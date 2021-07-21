import "./style.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

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
        <ItemListContainer />
      </section>
      {/* <section>
        <ItemDetailContainer />
      </section> */}
    </div>
  );
}

export default App;
