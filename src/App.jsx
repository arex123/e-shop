import { useState } from "react";

import Products from "./components/Products/ProductList";

import Header from "./components/Header/Header";
import Footer from "./components/Footer.jsx/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Products />
      <Footer/>
    </>
  );
}

export default App;
