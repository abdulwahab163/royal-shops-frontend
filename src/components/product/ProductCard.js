import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';

const ProductCard = ({ product, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        <Avatar alt="Product" src={product.media} variant="square" />
      </Box>
      <Typography align="center" color="textPrimary" gutterBottom variant="h5">
        Name: {product.title}
      </Typography>
      <Typography align="center" color="textPrimary" gutterBottom variant="h5">
        Category: {product.category}
      </Typography>
      <Typography align="center" color="textPrimary" gutterBottom variant="h5">
        Stock: {product.stock}
      </Typography>
      <Typography align="center" color="textPrimary" gutterBottom variant="h5">
        Size: {product.size}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
