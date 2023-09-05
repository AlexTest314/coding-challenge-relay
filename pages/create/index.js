import React from "react";
import ProductForm from "../../components/ProductForm";

const CreateProductPage = () => {
  return <ProductForm />;
};

export const createProductMutation = graphql`
  mutation createMutation($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
      name
      description
      category
      price
      createdAt
    }
  }
`;

const CreateQuery = graphql`
  query createQuery {
    viewer {
      products {
        id
        name
        description
        category
        price
        createdAt
      }
    }
  }
`;
CreateProductPage.query = CreateQuery;
export default CreateProductPage;
