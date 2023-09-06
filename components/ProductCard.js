// @flow
import { CardActions } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { styled } from "styled-components";

const StyledCard = styled(Card)`
  &:hover {
    box-shadow: 5px 6px 2px 1px rgba(33, 150, 243, 0.2);
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  background-color: #efcc00;
  &:hover {
    background-color: #c68000;
  }
`;

function ProductCard({ product }: { product: $FlowFixMe }) {
  return (
    <>
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
          <StyledButton
            href={`/edit/${product.id}`}
            size='small'
            variant='contained'
            color='primary'>
            Edit
          </StyledButton>
        </CardActions>
      </StyledCard>
    </>
  );
}

export default ProductCard;
