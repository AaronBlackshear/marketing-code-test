import React, { useContext } from 'react'

// IMAGE IMPORTS
import logo from '../assets/logo.svg';
import cartImage from '../assets/basket.svg';
import CartSidebar from "./CartSidebar";
import { CartContext } from "./CartContext";

function Header() {
  const { setCartOpen } = useContext(CartContext);

  return (
    <>
      <header className="header">
        <a href="/" className="company-logo">
          <img src={logo} alt="Octopus Energy Text Logo" />
        </a>

        <button type="button" title="Open Cart" data-testid="open-cart" className="cart-button" onClick={() => setCartOpen(true)}>
          <img src={cartImage} alt="Cart" />
        </button>
      </header>
      <CartSidebar />
    </>
  )
}

export default Header

