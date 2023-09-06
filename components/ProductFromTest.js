import Box from "@material-ui/core/Box";
import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import { OutlinedInput } from "@material-ui/core";
import { useMutation } from "react-relay";

/* export const createProductMutation = graphql`
  mutation pages_indexCreateMutation($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
      name
      description
      price
      createdAt
    }
  }
`; */

const ProductFrom = () => {
  //const [createNewProduct] = useMutation(createProductMutation);

  const validationSchema = yup.object({
    name: yup.string("Enter your name").required("Name is required"),
    description: yup.string("Enter your description").required("Description is required"),
    price: yup.string("Enter your price").required("Price is required")
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      createNewProduct({
        variables: {
          input: { name: values.name, price: Number(values.price), description: values.description }
        }
      });
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        alignSelf='center'
        width={700}
        display='flex'
        alignItems='center'
        justifyContent='center'
        m={4}>
        <FormLabel variant='h1'>Create product</FormLabel>
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        gap={4}
        mb={4}>
        <OutlinedInput
          id='name'
          name='name'
          type='text'
          label='Name'
          required
          value={formik.values.name}
          onChange={formik.handleChange}
        />

        <OutlinedInput
          id='description'
          name='description'
          label='description'
          type='text'
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        <OutlinedInput
          id='price'
          name='price'
          label='price'
          type='text'
          value={formik.values.price}
          onChange={formik.handleChange}
        />
      </Box>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          size='medium'>
          Create
        </Button>
      </Box>
    </form>
  );
};

export default ProductFrom;
