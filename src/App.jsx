import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Help from "./Components/Help";
import Offers from "./Components/Offers";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import About from "./components/About";
import Checkout from "./components/Checkout";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import CheckoutSuccess from "./components/CheckoutSuccess";

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route 
              exact
              path="/category/:category"
              element={<ItemListContainer />}
            />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/offers" element={<Offers />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path='/checkout' element={<Checkout />} />
            <Route exact path='/checkoutSuccess' element={<CheckoutSuccess />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  );

};

export default App;
