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

const ProductCard = ({ name, category, stock, salePrice, retailPrice, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}
    {...rest}
  >
    <CardContent style={{
      position: 'relative',
      paddingBottom: 0
    }}>
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
        }} alt="Product" src="https://www.google.com/search?q=images&rlz=1C1OKWM_enPK963PK963&tbm=isch&source=iu&ictx=1&fir=beTkmkzbIFbk8M%252CPqwxwTsaoO2VmM%252C_&vet=1&usg=AI4_-kTlMcC-xycClKn3V9CI6OYd6BgrIw&sa=X&ved=2ahUKEwj8w8Skh9fyAhVAAWMBHamLDFUQ9QF6BAgOEAE#imgrc=beTkmkzbIFbk8M" variant="square" />
      </Box>
      <Grid container justifyContent="space-around">
        <Grid item>
          <Typography color="textPrimary" gutterBottom variant="subtitle1">
            Name:<span style={{
              marginLeft: 26,
              fontWeight: "bold",
              display: "inlineBlock",
              width: 200,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}>{name}</span>
          </Typography>
          <Typography color="textPrimary" gutterBottom variant="subtitle1">
            Category: <span style={{
              fontWeight: "bold"
            }}>{category}</span>
          </Typography>
        </Grid>
        <Grid item>
          <Typography color="textPrimary" gutterBottom variant="subtitle1">
            Stock: <span style={{
              marginLeft: 10, fontWeight: "bold"
            }}>{stock}</span>
          </Typography>
          <Typography color="textPrimary" gutterBottom variant="subtitle1">
            Sale Price: <span style={{
              fontWeight: "bold"
            }}>{salePrice}</span>
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
  </Card >
);


export default ProductCard;
