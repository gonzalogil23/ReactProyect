import "./style.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./Context/CartContext";
import ItemProvider from "./Context/ItemContext";
import CartContainer from "./components/CartContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <ItemProvider>
        <CartProvider>
          <NavBar />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route
              exact
              path={"/Categoria/:categoryId"}
              component={ItemListContainer}
            />
            <Route
              exact
              path={"/item/:itemId"}
              component={ItemDetailContainer}
            />
            <Route exact path={"/CartContainer"} component={CartContainer} />
          </Switch>
          <Footer />
        </CartProvider>
      </ItemProvider>
    </BrowserRouter>
  );
}

export default App;
