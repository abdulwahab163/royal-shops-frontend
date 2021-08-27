import React, { useState } from 'react'

import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import AddIcon from '@material-ui/icons/Add';

import Dialog from './../Dialog';
import AddCustomer from './AddCustomer';

const defaultValue = {
  name: '',
  address: '',
  nationalId: "",
  phone: ""
}

const CustomerListToolbar = (props) => {
  const [addCustomerOpen, setAddCustomerOpen] = useState(false)
  const [customerData, setCustomerData] = useState(defaultValue)

  const handleCustomerSave = () => {
    console.log(customerData)
  }

  return (
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button onClick={() => setAddCustomerOpen(!addCustomerOpen)} color="primary" variant="contained" startIcon={<AddIcon />}>
          Add customer
        </Button>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search customer"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
      {/* Customer Dialog */}
      <Dialog maxWidth="sm" buttonWidth='100%' open={addCustomerOpen} setOpen={setAddCustomerOpen} onSave={() => { handleCustomerSave(); setCustomerData(defaultValue); }} onCancel={() => setCustomerData(defaultValue)}>
        <AddCustomer customerData={customerData} setCustomerData={setCustomerData} />
      </Dialog>
    </Box>
  );
}
export default CustomerListToolbar;
