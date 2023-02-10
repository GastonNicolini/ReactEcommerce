import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Help from "./Components/Help";
import Offers from "./Components/Offers";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
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
          <Route exact path="/Help" element={<Help />} />
          <Route exact path="/cart" element={<Cart />} /> 
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );

};

export default App;
