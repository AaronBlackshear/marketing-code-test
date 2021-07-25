describe('should be able to add items to the basket', async () => {
  it('adds items  to cart', () => {
    cy.intercept('http://127.0.0.1:8000/graphql').as('getproduct')
    cy.visit('http://localhost:3000')
    cy.wait('@getproduct')

    cy.get('[data-testid="add-to-cart"]').click()
    cy.get('[data-testid="open-cart"]').click()
    expect(cy.get('[data-testid="cart-products-list"]').children('.cart-product')).to.exist
  });
})
