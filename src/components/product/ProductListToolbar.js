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
import CategoryIcon from '@material-ui/icons/Category';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import Dialog from './../Dialog';
import AddProducts from './AddProducts';
import AddCategory from './AddCategory';
import { addCategory } from './../../redux/actions/category.actions'


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const ProductListToolbar = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch()

  const [addProductOpen, setAddProductOpen] = useState(false)
  const [addCategoryOpen, setAddCategoryOpen] = useState(false)
  const [categoryName, setCategoryName] = useState('')

  const handleCategorySave = () => {
    dispatch(addCategory(categoryName))

  }



  return (<Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Button onClick={() => setAddCategoryOpen(true)} style={{ marginRight: 10 }} className={classes.button} color="primary" startIcon={<CategoryIcon />} variant="contained">
        Add Category
      </Button>
      <Button onClick={() => setAddProductOpen(true)} color="primary" startIcon={<AddIcon />} variant="contained">
        Add Product
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
              placeholder="Search product"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
    {/* Product Dialog */}
    <Dialog open={addProductOpen} setOpen={setAddProductOpen}>
      <AddProducts />
    </Dialog>
    {/* Category Dialog */}
    <Dialog maxWidth={'sm'} buttonWidth={"100%"} open={addCategoryOpen} setOpen={setAddCategoryOpen} onSave={() => { handleCategorySave(); setCategoryName(''); }} onCancel={() => setCategoryName('')}>
      <AddCategory categoryName={categoryName} setCategoryName={setCategoryName} />
    </Dialog>
  </Box>
  );
}
export default ProductListToolbar;
