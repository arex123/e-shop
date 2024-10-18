import { useState } from "react";

import Products from "./components/Products/ProductList";

import Header from "./components/Header/Header";
import Footer from "./components/Footer.jsx/Footer";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
const router = createBrowserRouter([
  {path:'/',element:<HomePage/>},
  {path:'/about',element:<About/>}
])
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Header />
      <RouterProvider router={router} />
      <Footer/>
    </div>
  );
}

export default App;
