import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Tooltip
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const ProductCard = ({ product, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent style={{ position: 'relative' }}>
      <Grid style={{ position: 'absolute', right: '17px', top: '14px' }}><Tooltip arrow title="Edit"><EditIcon color="primary" style={{ cursor: 'pointer', border: "1px solid", marginRight: 8 }} /></Tooltip>
        <Tooltip arrow title="Delete"><DeleteIcon style={{ cursor: 'pointer', border: "1px solid" }} color="secondary" /></Tooltip></Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        <Avatar style={{
          width: 220,
          height: 170
        }} alt="Product" src={product.media} variant="square" />
      </Box>
      <Grid container justifyContent="space-around">
        <Grid item>
          <Typography color="textPrimary" gutterBottom variant="subtitle1">
            Name:<span style={{
              marginLeft: 26,
              fontWeight: "bold"
            }}>{product.title}</span>
          </Typography>
          <Typography color="textPrimary" gutterBottom variant="subtitle1">
            Category: <span style={{
              fontWeight: "bold"
            }}>{product.category}</span>
          </Typography>
        </Grid>
        <Grid item>
          <Typography color="textPrimary" gutterBottom variant="subtitle1">
            Stock: <span style={{
              fontWeight: "bold"
            }}>{product.stock}</span>
          </Typography>
          <Typography color="textPrimary" gutterBottom variant="subtitle1">
            Size: <span style={{
              marginLeft: 10,
              fontWeight: "bold"
            }}>{product.size}</span>
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
  </Card >
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
