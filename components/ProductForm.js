import Box from "@material-ui/core/Box";
import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import Button from "@material-ui/core/Button";
import { DialogActions, TextField, Typography } from "@material-ui/core";
import { useMutation } from "react-relay";
import { useRouter } from "next/router";
import { createProductMutation } from "../pages/create";
import { updateProductMutation } from "../pages/edit/[id]";
import { styled } from "styled-components";

const formFields = ["name", "description", "category", "price"];

const StyledActions = styled(DialogActions)`
  margin-bottom: 20;
  justify-content: "center";
`;

const StyledFormContent = styled(Box)`
  width: 500px;
`;

const StyledForm = styled.form`
  width: 770px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: auto;
  background-color: white;
  border: 1px solid rgba(120, 120, 120, 0.7);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 390px) {
    width: 360px;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
  @media (max-width: 390px) {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const InputField = styled(TextField)`
  font-size: 10px;
`;
const StyledHelperText = styled.div`
  height: 15px;
  opacity: 1;
  color: red;
  margin-top: 5px;
  padding-left: 10px;
`;

const ProductForm = ({ product }) => {
  const [updateProduct] = useMutation(updateProductMutation);
  const [createProduct] = useMutation(createProductMutation);

  const router = useRouter();

  const handleCancel = () => router.push({ pathname: "/" });

  const pageTitle = product ? "Edit product" : "Create product";

  const validationSchema = yup.object({
    name: yup.string("Enter your name").required("Name is required"),
    description: yup.string("Enter your description").required("Description is required"),
    category: yup.string("Enter your category").required("Category is required"),
    price: yup.string("Enter your price").required("Price is required")
  });

  const formik = useFormik({
    initialValues: {
      name: product?.name || "",
      description: product?.description || "",
      price: product?.price || "",
      category: product?.category || ""
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      if (product) {
        updateProduct({
          variables: {
            input: {
              id: product.id,
              name: values.name,
              price: Number(values.price),
              description: values.description,
              category: values.category,
              createdAt: product.createdAt
            }
          }
        });
      } else {
        createProduct({
          variables: {
            input: {
              name: values.name,
              price: Number(values.price),
              description: values.description,
              category: values.category
            }
          }
        });
      }
      handleCancel();
    }
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Box>
        <Typography
          style={{ marginTop: 20, marginBottom: 20, textAlign: "center" }}
          variant='h1'>
          {pageTitle}
        </Typography>
      </Box>
      <StyledFormContent>
        {formFields.map((field, i) => (
          <>
            <InputWrapper>
              <InputField
                error={formik.errors[field]}
                key={i}
                fullWidth
                id={field}
                name={field}
                label={field.slice(0, 1).toUpperCase() + field.slice(1)}
                value={formik.values[field]}
                onChange={formik.handleChange}
                variant='outlined'
                type='text'
                helperText={null}
              />
              <StyledHelperText>{formik.errors[field]}</StyledHelperText>
            </InputWrapper>
          </>
        ))}
      </StyledFormContent>
      <StyledActions>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          size='large'>
          Agree
        </Button>
        <Button
          onClick={handleCancel}
          type='button'
          variant='contained'
          color='secondary'
          size='large'>
          Cancel
        </Button>
      </StyledActions>
    </StyledForm>
  );
};

export default ProductForm;
