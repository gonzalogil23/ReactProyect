import "./style.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart";
import CartProvider from "./Context";
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route
            exact
            path={"/Categoria/:categoryId"}
            component={ItemListContainer}
          />
          <Route exact path={"/item/:itemId"} component={ItemDetailContainer} />
          <Route exact path={"/Cart"} component={Cart} />
        </Switch>
      </CartProvider>
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
