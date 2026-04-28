import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Product from "./pages/Product";
import AdminDashboard from "./Admin/AdminDashboard";
import Users from "./Admin/Users";
import Products from "./Admin/Products";
import AddProduct from "./Admin/AddProduct";
import EditProduct from "./Admin/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* PAGES WITH NAVBAR + FOOTER */}
        <Route element={<MainLayout />}>
          
          <Route path="/auth" element={<Auth />} />
          <Route path="/products" element={<Product />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/admin/edit-product/:id" element={<EditProduct />} />
        </Route>

        {/* AUTH PAGE WITHOUT NAVBAR + FOOTER (optional) */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
