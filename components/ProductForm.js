import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import Button from "@material-ui/core/Button";
import { DialogActions, DialogContent, DialogTitle, FormHelperText, OutlinedInput, TextField, Typography } from "@material-ui/core";
import { useMutation } from "react-relay";
import { createProductMutation } from "../pages/create";
import { useRouter } from "next/router";
import { updateProductMutation } from "../pages/edit/[id]";

const formFields = ["name", "description", "category", "price"];

const ProductForm = ({ product, isEdit }) => {
  const [updateProduct] = useMutation(updateProductMutation);
  const [createProduct] = useMutation(createProductMutation);

  const router = useRouter();

  const validationSchema = yup.object({
    name: yup.string("Enter your name").required("Name is required"),
    description: yup.string("Enter your description").required("Description is required"),
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
      if (isEdit) {
        updateProduct({
          variables: {
            input: { id: product.id, name: values.name, price: Number(values.price), description: values.description, category: values.category, createdAt: product.createdAt }
          }
        });
      } else {
        createProduct({
          variables: {
            input: { name: values.name, price: Number(values.price), description: values.description, category: values.category }
          }
        });
      }
      router.push({ pathname: "/" });
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <DialogTitle>
        <Typography
          style={{ marginTop: 20, marginBottom: 20, textAlign: "center" }}
          variant='h1'>
          {isEdit ? "Edit product" : "Create product"}
        </Typography>
      </DialogTitle>
      <DialogContent>
        {formFields.map((field, i) => (
          <TextField
            key={i}
            fullWidth
            style={{ marginBottom: 20 }}
            id={field}
            name={field}
            label={field}
            value={formik.values[field]}
            onChange={formik.handleChange}
            variant='outlined'
            type='text'
            helperText={formik.touched[field] && formik.errors[field]}
          />
        ))}
      </DialogContent>
      <DialogActions style={{ marginBottom: 20, justifyContent: "center" }}>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          size='large'>
          Agree
        </Button>
        <Button
          onClick={() => router.push({ pathname: "/" })}
          type='button'
          variant='contained'
          color='secondary'
          size='large'>
          Cancel
        </Button>
      </DialogActions>
    </form>
  );
};

export default ProductForm;
