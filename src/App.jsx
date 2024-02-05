import './App.css'
import { useState } from "react"
import Header from './components/Header'
import ContentPage from './components/ContentPage'
import Nav from './components/Nav'

function App() {
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState("Ninjago")
  const [cart, setCart] = useState([])
  return (
    <>
      <div id="container">
        <Header amount={amount} cart={cart} setCart={setCart}/>
        <Nav category={category}/>
        <ContentPage amout={amount} setAmount={setAmount} category={category} cart={cart} setCart={setCart}/>
    </div>
    </>
  )
}

export default App
