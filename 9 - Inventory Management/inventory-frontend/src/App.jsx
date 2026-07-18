import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import LowStock from "./components/LowStock";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <div className="container mt-4">

        <Routes>

          <Route path="/" element={<ProductList />} />

          <Route path="/add" element={<AddProduct />} />

          <Route path="/edit/:id" element={<EditProduct />} />

          <Route path="/low-stock" element={<LowStock />} />

        </Routes>

      </div>

    </BrowserRouter>

  )

}

export default App;