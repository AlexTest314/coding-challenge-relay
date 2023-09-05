// @flow
import { Button, CardActions, styled } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(1),
  maxWidth: 400,
  maxWidth: 350,
  margin: 20,
  flex: "1 1 30%",

  [theme.breakpoints.down("xs")]: { flex: "1 1 40%" }
}));

function ProductCard({ product }: { product: $FlowFixMe }) {
  console.log("product", product);
  return (
    <StyledCard>
      <CardContent>
        <Typography
          variant='h5'
          component='div'>
          {product.name}
        </Typography>
        <Typography
          variant='subtitle1'
          color='textSecondary'>
          Price: ${product.price.toFixed(2)}
        </Typography>
        <Typography
          variant='subtitle1'
          color='textSecondary'
          component='p'>
          {product.category}
        </Typography>
        <Typography
          variant='body2'
          color='textSecondary'
          component='p'>
          {product.description}
        </Typography>
        <Typography
          variant='caption'
          color='textSecondary'
          display='block'>
          Created At: {new Date(product.createdAt).toLocaleDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href={`/edit/${product.id}`}
          size='small'
          variant='outlined'
          color='primary'>
          Edit
        </Button>
      </CardActions>
    </StyledCard>
  );
}

export default ProductCard;
