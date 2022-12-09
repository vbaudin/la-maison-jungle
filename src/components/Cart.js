import '../styles/Cart.css'

const Cart = () => {
    const plant0 = "Monstera"
    const price0 = 8
    const plant1 = "Lierre"
    const price1 = 10
    const plant2 = "Bouquet de fleurs"
    const price2 = 15
    const totalPrice = price0 + price1 + price2
    
    return (<div className='lmj-cart'>
            <h2>Panier</h2>
            <ul>
                <li> {plant0 + " " + price0 + "€"} </li>
                <li> {plant1 + " " + price1 + "€"} </li>
                <li> {plant2 + " " + price2 + "€"} </li>
                <li> {"Prix total : " + totalPrice} </li>
            </ul>
        </div>
    )
  }

  export default Cart