import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField
} from '@material-ui/core';

const Orders = (props) => {
  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });
  const [count, setCount] = useState([]);
  const [item, setItem] = useState(0);

  const handleClick = (event) => {
    event.preventDefault();
    count.push(item);
    setCount(count);
    setItem(item + 1);
  };

  const handleRemove = (index) => {
    count.splice(index, 1);
    setCount(count);
    setItem(item - 1);
  };

  const AddMoreProducts = ({ index }) => {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={() => handleRemove(index)}>Remore</button>
        </div>

        <CardContent>
          <TextField
            label="Category"
            margin="normal"
            name="confirm"
            fullWidth
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
          <TextField
            label="Products's Name"
            margin="normal"
            fullWidth
            name="password"
            onChange={handleChange}
            type="text"
            value={values.password}
            variant="outlined"
          />

          <TextField
            label="Quantity"
            margin="normal"
            name="confirm"
            fullWidth
            margin="normal"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
          <TextField
            label="Price"
            margin="normal"
            fullWidth
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
        </CardContent>
      </>
    );
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form {...props}>
      <Card>
        <CardHeader subheader="Add To Cart" title="Orders" />
        <Divider />
        <CardContent>
          <TextField
            label="Customer's Name"
            margin="normal"
            fullWidth
            name="password"
            onChange={handleChange}
            type="text"
            value={values.password}
            variant="outlined"
          />
          <TextField
            label="Customer's CNIC"
            margin="normal"
            name="confirm"
            fullWidth
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
          <TextField
            label="Customer's Address"
            margin="normal"
            name="confirm"
            fullWidth
            margin="normal"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
          <TextField
            label="Customer's Phone No"
            margin="normal"
            fullWidth
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button color="primary" variant="contained">
            Process Order
          </Button>
        </Box> */}
      </Card>
      <Divider />
      <Card>
        <CardHeader subheader="Add To Cart" title="Products Information" />
        <Divider />
        <CardContent>
          <TextField
            label="Category"
            margin="normal"
            name="confirm"
            fullWidth
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
          <TextField
            label="Products's Name"
            margin="normal"
            fullWidth
            name="password"
            onChange={handleChange}
            type="text"
            value={values.password}
            variant="outlined"
          />

          <TextField
            label="Quantity"
            margin="normal"
            name="confirm"
            fullWidth
            margin="normal"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
          <TextField
            label="Price"
            margin="normal"
            fullWidth
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
        </CardContent>
        {count.map((index) => (
          <AddMoreProducts key={index} index={index} />
        ))}

        <button onClick={handleClick}>Add More</button>

        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button color="primary" variant="contained">
            Process Order
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default Orders;
