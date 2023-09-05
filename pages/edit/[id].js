import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { graphql } from "relay-runtime";
import ProductForm from "../../components/ProductForm";

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

const ProdutEditPage = (props) => {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);

  const id = router.query.id;

  useEffect(() => {
    const editMode = router.asPath.includes("edit");
    if (editMode) {
      setIsEdit(true);
    }
  }, []);

  const product = props.viewer.products.find((product) => product.id === id);

  return (
    <div>
      <ProductForm
        product={product}
        isEdit={isEdit}
      />
    </div>
  );
};

ProdutEditPage.query = EditQuery;

export default ProdutEditPage;
