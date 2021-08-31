import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Box, Container, Grid, Pagination } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import ProductListToolbar from 'src/components/product/ProductListToolbar';
import ProductCard from 'src/components/product/ProductCard';
import { getAllProducts } from './../redux/actions/product.actions'
import AddProducts from 'src/components/product/AddProducts';

const ProductList = () => {
  const dispatch = useDispatch()
  const [editProductOpen, setEditProductOpen] = useState(false)
  const [editProduct, setEditProduct] = useState('')

  const products = useSelector(state => state.product.productList)


  useEffect(() => {
    dispatch(getAllProducts())

  }, [])
  const handleDeleteProduct = (id) => {
    console.log(id, 'deleteId')
  }

  const handleEditProduct = (product) => {
    console.log(product, 'editId')
    setEditProduct(product)
    setEditProductOpen(true)
  }

  if (!products) {
    return <h3>No Products Added Yet</h3>
  }

  return (<>

    <Helmet>
      <title>Products</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            {products && products.map((product) => (
              <Grid item key={product.id} lg={4} md={6} xs={12}>
                <ProductCard onDelete={handleDeleteProduct} onEdit={handleEditProduct} id={product.id} name={product.name} category={product.category.name} stock={product.stock} salePrice={product.salePrice} retailPrice={product.retailPrice} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination color="primary" count={3} size="small" />
        </Box>
      </Container>
    </Box>
    {/* Edit Product Dialog*/}
    <AddProducts product={editProduct && editProduct} open={editProductOpen} setOpen={setEditProductOpen} />
  </>)
};

export default ProductList;
