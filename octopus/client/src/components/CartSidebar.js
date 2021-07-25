import React, { useContext } from 'react'
import formatPrice from "../utils/formatPrice";
import { CartContext } from "./CartContext"

export default function CartSidebar() {
  const { cartItems, setCartOpen, cartOpen, removeFromCart } = useContext(CartContext);

  const cartArray = Object.entries(cartItems);

  return (
    <aside className={`cart-sidebar ${cartOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Cart</h2>
        <button type="button" onClick={() => setCartOpen(false)}>X</button>
      </div>

      <section className="cart-products-list" data-testid="cart-products-list">
        {cartArray.length > 0 ? (
          cartArray.map(([id, item]) => (
            <div key={item?.product?.id} className="cart-product">
              <img src={item?.product?.imgUrl} alt={item?.product?.name || ""} className="cart-product-image" />
              <div className="cart-product-details">
                <p className="cart-product-name">{item?.product?.name}</p>
                <p className="cart-product-price">${formatPrice(item?.product?.price)} • {item?.quantity} ct</p>
                <button type="button" onClick={() => removeFromCart(id)} className="cart-product-remove">
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : <p className="cart-empty">Cart Empty</p>}
      </section>
    </aside>
  )
}
