import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer.jsx/Footer";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import Products from "./components/Products/Products";
import ProductDetails from "./pages/Products/ProductDetails";


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />}/>
      </Routes>
        <Footer />
      {/* <RouterProvider router={router} /> */}
    </BrowserRouter>
  );
  
}

export default App;
