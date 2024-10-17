import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products/ProductList'
// import '../node_modules/react-bootstrap/dist/react-bootstrap.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// bootstrap/dist/css/bootstrap.min.css


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Products/>
    </>
  )
}

export default App
