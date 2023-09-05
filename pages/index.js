// @flow
import React, { Component } from "react";
import { graphql } from "react-relay";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ProductCard from "../components/ProductCard";

type Props = {
  ...pages_indexQueryResponse
};

function Index(props: Props) {
  return (
    <Box>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        m={4}>
        <Typography variant='h1'>Products</Typography>
      </Box>
      <Box
        display='flex'
        flexWrap='wrap'
        alignItems='center'
        justifyContent='center'>
        {props.viewer.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </Box>
    </Box>
  );
}

Index.query = graphql`
  query pages_indexQuery {
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

export default Index;
