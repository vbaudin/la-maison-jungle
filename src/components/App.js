import Banner from "./Banner"
import Cart from "./Cart"
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import { useEffect, useState } from 'react'
import '../styles/Layout.css'

const App = () => {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div>
      <Banner />
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  )
}

export default App;
