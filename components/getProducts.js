import { request, gql } from 'graphql-request';

//get products from mock.shop using graphql

export default async function getProducts() {
  const query = gql`
    {
      products(first: 16) {
        edges {
          node {
            id
            title
            description
            featuredImage {
              id
              url
            }
            variants(first: 1) {
              edges {
                node {
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await request('https://mock.shop/api', query);
  const products = response.products.edges.map((product) => product.node);
  return products;
}