import { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField, Grid
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const defaultCustomerData = {
  name: '',
  nationalId: '',
  address: '',
  phone: ''
}

const defaultOrderData = {
  name: '',
  category: '',
  quantity: '',
  price: ''
}

const Orders = (props) => {
  const [values, setValues] = useState({})
  const [customerData, setCustomerData] = useState({
    defaultCustomerData
  });
  const [orderData, setOrderData] = useState({
    defaultOrderData
  });
  const [count, setCount] = useState([]);
  const [item, setItem] = useState(0);

  const handleOrderChange = (event) => {
    setOrderData({
      ...orderData,
      [event.target.name]: event.target.value
    });
  };

  const handleCustomerChange = (event) => {
    setCustomerData({
      ...customerData,
      [event.target.name]: event.target.value
    });
  }

  const handleRemove = (index) => {
    count.splice(index, 1);
    setCount(count);
    setItem(item - 1);
  };

  const handleClick = (event) => {
    event.preventDefault();
    count.push(item);
    setCount(count);
    setItem(item + 1);
  };

  const AddMoreProducts = ({ index }) => {
    return (
      <>
        <div style={{
          display: 'flex', justifyContent: 'flex-end', maxWidth: "69%",
          margin: "0 auto 32px"
        }}>
          <Button style={{ marginRight: "1%" }} onClick={() => handleRemove(index)} startIcon={<RemoveIcon />} color="secondary" variant="contained">
            Remove
          </Button>
        </div>
        <Divider />
        <CardContent style={{ margin: "0 auto", maxWidth: "70%" }}>
          <Grid
            container
            direction="row"
            style={{ justifyContent: 'space-between' }}
          >
            <Grid item style={{ flex: 1, marginRight: 10 }}>
              <TextField
                label="Category"
                margin="normal"
                name="confirm"
                fullWidth
                onChange={(e) => handleOrderChange(e)}
                type="password"
                value={values.confirm}
                variant="outlined"
              /></Grid>
            <Grid item style={{ flex: 1 }}>
              <TextField
                label="Products's Name"
                margin="normal"
                fullWidth
                name="password"
                onChange={(e) => handleOrderChange(e)}
                type="text"
                value={values.password}
                variant="outlined"
              /></Grid></Grid>
          <Grid
            container
            direction="row"
            style={{ justifyContent: 'space-between' }}
          >
            <Grid item style={{ flex: 1, marginRight: 10 }}>
              <TextField
                label="Quantity"
                margin="normal"
                name="confirm"
                fullWidth
                margin="normal"
                onChange={(e) => handleOrderChange(e)}
                type="password"
                value={values.confirm}
                variant="outlined"
              /></Grid>
            <Grid item style={{ flex: 1 }}>
              <TextField
                label="Price"
                margin="normal"
                fullWidth
                name="confirm"
                onChange={(e) => handleOrderChange(e)}
                type="password"
                value={values.confirm}
                variant="outlined"
              /></Grid></Grid>
        </CardContent>
      </>
    );
  };


  return (
    <> <Helmet>
      <title>Process Order</title>
    </Helmet>
      <form {...props} style={{
        backgroundColor: '#f4f6f8'
      }}>

        <Card style={{
          backgroundColor: '#f4f6f8'
        }}>
          <Divider style={{ marginTop: 40 }} />
          <CardHeader title="Orders" style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }} />
          <Divider />
          <CardContent style={{ margin: "0 auto", maxWidth: "70%" }}>
            <Grid
              container
              direction="row"
              style={{ justifyContent: 'space-between' }}
            >
              <Grid item style={{ flex: 1, marginRight: 10 }}>
                <TextField
                  label="Customer's Name"
                  margin="normal"
                  fullWidth
                  name="name"
                  onChange={(e) => handleCustomerChange(e)}
                  type="text"
                  value={values.name}
                  variant="outlined"
                /></Grid>
              <Grid item style={{ flex: 1 }}>
                <TextField
                  label="Customer's CNIC"
                  margin="normal"
                  name="nationalId"
                  fullWidth
                  onChange={(e) => handleCustomerChange(e)}
                  type="number"
                  value={values.nationalId}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              style={{ justifyContent: 'space-between' }}
            >
              <Grid item style={{ flex: 1, marginRight: 10 }}>
                <TextField
                  label="Customer's Address"
                  margin="normal"
                  name="address"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleCustomerChange(e)}
                  type="text"
                  value={values.address}
                  variant="outlined"
                /></Grid>
              <Grid item style={{ flex: 1 }}>
                <TextField
                  label="Customer's Phone No"
                  margin="normal"
                  fullWidth
                  name="phone"
                  onChange={(e) => handleCustomerChange(e)}
                  type="number"
                  value={values.phone}
                  variant="outlined"
                /></Grid></Grid>
          </CardContent>
          <Divider />
        </Card>

        <Card style={{
          backgroundColor: '#f4f6f8'
        }}>
          <CardHeader style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }} title="Products Information" />
          <Divider />
          <CardContent style={{ margin: "0 auto", maxWidth: "70%" }}>
            <Grid
              container
              direction="row"
              style={{ justifyContent: 'space-between' }}
            >
              <Grid item style={{ flex: 1, marginRight: 10 }}>
                <TextField
                  label="Products's Name"
                  margin="normal"
                  fullWidth
                  name="password"
                  onChange={(e) => handleOrderChange(e)}
                  type="text"
                  value={values.password}
                  variant="outlined"
                /> </Grid>
              <Grid item style={{ flex: 1 }}>

                <TextField
                  label="Category"
                  margin="normal"
                  name="confirm"
                  fullWidth
                  onChange={(e) => handleOrderChange(e)}
                  type="password"
                  value={values.confirm}
                  variant="outlined"
                />
              </Grid></Grid>
            <Grid
              container
              direction="row"
              style={{ justifyContent: 'space-between' }}
            >
              <Grid item style={{ flex: 1, marginRight: 10 }}>
                <TextField
                  label="Quantity"
                  margin="normal"
                  name="confirm"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleOrderChange(e)}
                  type="password"
                  value={values.confirm}
                  variant="outlined"
                /></Grid>
              <Grid item style={{ flex: 1 }}>
                <TextField
                  label="Price"
                  margin="normal"
                  fullWidth
                  name="confirm"
                  onChange={(e) => handleOrderChange(e)}
                  type="password"
                  value={values.confirm}
                  variant="outlined"
                /></Grid></Grid>
          </CardContent>
          {count.map((index) => (
            <AddMoreProducts key={index} index={index} />
          ))}
          <div style={{
            maxWidth: "67.5%",
            margin: "0 auto 32px"
          }}>
            <Button style={{
              backgroundColor: '#12824C', color: '#FFFFFF'
            }} onClick={handleClick} startIcon={<AddIcon />} color="primary" variant="contained">
              Add More
            </Button></div>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 2,
              maxWidth: "70%",
              margin: "0 auto"
            }}
          >
            <Button style={{ outline: 'none' }} color="primary" variant="contained">
              Process Order
            </Button>
          </Box>
        </Card>
      </form >
    </>
  );
};

export default Orders;
