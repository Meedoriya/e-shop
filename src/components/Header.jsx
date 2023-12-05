import React from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map((obj) => (
        <Order key={obj.id} item={obj} />
      ))}
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>There are no products</h2>
    </div>
  )
}

export default function Header(props) {
  const [cartOpen, setCartOpen] = React.useState(false)

  return (
    <header>
      <div>
        <span className='logo'>House Stuff</span>
        <ul className='nav'>
          <li>About us</li>
          <li>Contacts</li>
          <li>Cabinet</li>
        </ul>
        <FaShoppingBasket
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-basket-button ${cartOpen ? 'active' : ''}`} />

        {
          cartOpen &&
          (
            <div className='shop-basket'>
              {props.orders.length > 0 ?
                showOrders(props) : showNothing()}
            </div>
          )
        }
      </div>
      <div className='presentation'></div>
    </header>
  )
}
