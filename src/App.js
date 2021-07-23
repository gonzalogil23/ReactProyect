import "./style.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exath path="/">
          <Home />
        </Route>
        <Route exath path="/Categoria/:id">
          <ItemListContainer />
          <Route />
          <Route exath path="/item/:id" />
          <ItemDetailContainer />
        </Route>
        {/* <Route>
        <Cart/>
      </Route>
        */}
      </Switch>
    </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     <NavBar />
    //   </header>
    //   <section className="home">
    //     <Home />
    //   </section>
    //   <section className="container catálogo">
    //     <ItemListContainer />
    //   </section>
    // </div>
  );
}

export default App;
