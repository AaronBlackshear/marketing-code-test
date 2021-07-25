import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { mount } from 'enzyme';
import CartProvider from "./components/CartContext";
import AddToCart, { MIN_QUANTITY } from "./components/AddToCart";
import CartSidebar from "./components/CartSidebar";

const mockProduct = {
  id: 1,
  name: 'Mock product',
  price: 1299,
}


test('should be able to increase and decrease product quantity', async () => {
  const wrapper = render(
    <CartProvider>
      <AddToCart product={mockProduct} />
    </CartProvider>
  );

  expect(parseInt(wrapper.getByTestId('quantity').textContent)).toBe(MIN_QUANTITY);
  fireEvent.click(wrapper.getByTestId('increase-quantity'))
  expect(parseInt(wrapper.getByTestId('quantity').textContent)).toBe(MIN_QUANTITY + 1);
  fireEvent.click(wrapper.getByTestId('decrease-quantity'))
  expect(parseInt(wrapper.getByTestId('quantity').textContent)).toBe(MIN_QUANTITY);
  // Check if minimum quantity is working as expected
  fireEvent.click(wrapper.getByTestId('decrease-quantity'))
  expect(parseInt(wrapper.getByTestId('quantity').textContent)).toBe(MIN_QUANTITY);
});

test('should be able to add items to the basket', async () => {
  const addToCartWrapper = render(
    <CartProvider>
      <AddToCart product={mockProduct} />
    </CartProvider>
  );

  await fireEvent.click(addToCartWrapper.getByTestId('increase-quantity'))
  await fireEvent.click(addToCartWrapper.getByTestId('add-to-cart'))

  const sidebarWrapper = mount(
    <CartProvider>
      <CartSidebar />
    </CartProvider>
  );

  sidebarWrapper.update()
  console.log(sidebarWrapper.find('[data-testid="cart-products-list"]').text())

  expect(sidebarWrapper.find('[data-testid="cart-products-list"]')).toBe(false);
});
