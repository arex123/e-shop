import { useState } from "react";

// import Products from "./components/Products/Products";

import Header from "./components/Header/Header";
import Footer from "./components/Footer.jsx/Footer";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import Products from "./components/Products/Products";

// const router = createBrowserRouter([
//   { path: "/", element: <HomePage /> },
//   { path: "/store", element: <Products /> },
//   { path: "/about", element: <About /> },
// ]);
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
        <Footer />
      {/* <RouterProvider router={router} /> */}
    </BrowserRouter>
  );
}

export default App;
