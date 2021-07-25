import React, { useContext, useState } from 'react'
import formatPrice from "../utils/formatPrice";
import { CartContext } from "./CartContext";

export const MIN_QUANTITY = 1;

export default function AddToCart({ product }) {
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(MIN_QUANTITY);

  const priceInDollars = product?.price ? formatPrice(product?.price)?.toString() : '';
  const [dollars, cents] = priceInDollars?.split('.');

  return (
    <section className="section-container price-container">
      <div>
        <h2 className="product-price">${dollars}<span>.{cents}</span></h2>

        <div className="price-controls-wrapper">
          <p className="qty-label">QTY</p>
          <div className="price-controls">
            <button type="button" onClick={() => setQuantity(Math.max(quantity - 1, MIN_QUANTITY))} data-testid="decrease-quantity" className={`price-control ${quantity === MIN_QUANTITY ? 'disabled' : ''}`} disabled={quantity === MIN_QUANTITY}>-</button>
            <p className="quantity" data-testid="quantity">{quantity}</p>
            <button type="button" onClick={() => setQuantity(quantity + 1)} data-testid="increase-quantity" className={`price-control`}>+</button>
          </div>
        </div>
      </div>

      <button type="button" title="Add to cart" className="add-to-cart" data-testid="add-to-cart" onClick={() => addToCart(product, quantity)}>Add to cart</button>
    </section>
  )
}
