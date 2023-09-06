import React, { useEffect } from "react";
import { graphql } from "relay-runtime";
import MainContainer from "../../components/MainContainer";
import ProductForm from "../../components/ProductForm";
import Custom404 from "../404";

export const updateProductMutation = graphql`
  mutation Id_editUpdateMutation($input: UpdateProductInput!) {
    updateProduct(input: $input) {
      id
      name
      description
      category
      price
      createdAt
    }
  }
`;

const EditQuery = graphql`
  query Id_editQuery {
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

const ProdutEditPage = ({ id, viewer }) => {
  const product = viewer.products.find((product) => product.id === id);
  if (!product) {
    return <Custom404>Product not found</Custom404>;
  }

  return (
    <MainContainer>
      <ProductForm product={product} />
    </MainContainer>
  );
};

ProdutEditPage.query = EditQuery;

ProdutEditPage.getInitialProps = async (ctx) => {
  return { id: ctx.query.id };
};

export default ProdutEditPage;
