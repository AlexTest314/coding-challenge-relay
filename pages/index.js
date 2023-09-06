// @flow
import React from "react";
import { graphql } from "react-relay";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ProductCard from "../components/ProductCard";
import MainContainer from "../components/MainContainer";
import { styled } from "styled-components";

const StyledHeaderWrapper = styled(Box)`
  margin: 20px;
`;
const StyledGridWrapper = styled.div`
  display: grid;
  gap: 30px;

  @media (min-width: 390px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1366px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

type Props = {
  ...pages_indexQueryResponse
};

function Index(props: Props) {
  return (
    <MainContainer>
      <Box>
        <StyledHeaderWrapper
          display='flex'
          alignItems='center'
          justifyContent='center'>
          <Typography variant='h1'>Products</Typography>
        </StyledHeaderWrapper>

        <StyledGridWrapper>
          {props.viewer.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </StyledGridWrapper>
      </Box>
    </MainContainer>
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
