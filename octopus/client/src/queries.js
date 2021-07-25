import { gql } from 'apollo-boost';

export const GET_PRODUCT = gql`
  query GET_PRODUCT($id: ID) {
    product(productId: $id) {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      modelCode
      colour
      imgUrl
    }
  }
`;