import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopMenu from "./pages/ShopMenu";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopMenu />} />
          <Route path="/women" element={<ShopMenu />} />
          <Route path="/kids" element={<ShopMenu />} />
          <Route path="/product" element={<Product />}>
            <Route path="/product/:id" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
