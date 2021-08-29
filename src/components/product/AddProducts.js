import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import Image from '../../assets/download.png'
import Button from './../Button'
import { getAllCategories } from './../../redux/actions/category.actions'
import { addProduct } from './../../redux/actions/product.actions';


const useStyles = makeStyles((theme) => ({
  headerContainer: {
    textAlign: 'center'
  },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,

  },
  cancel: {
    marginLeft: 10,
    marginRight: 10
  }
}));

const defaultProductData = {
  name: '',
  retailPrice: 0,
  salePrice: 0,
  stock: 0
}

const AddProducts = ({ open, setOpen, maxWidth, buttonWidth }) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [fullWidth, setFullWidth] = React.useState(true);

  const [productData, setProductData] = useState(defaultProductData)

  const [nameError, setNameError] = useState('')
  const [categoryIdError, setCategoryIdError] = useState('')
  const [retailPriceError, setRetailPriceError] = useState('')
  const [salePriceError, setSalePriceError] = useState('')
  const [stockError, setStockError] = useState('')

  const categories = useSelector(state => state.category.categoryList)

  useEffect(() => {
    dispatch(getAllCategories())
  }, [])

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.id]: e.target.value
    })

  }

  const handleValidate = () => {
    if (productData.name.length < 2) {
      setNameError("name must be greater than 2 Characters")
    }
    if (!productData.stock > 0) {
      setStockError("stock must be greater then 0")
    }
    if (!productData.retailPrice > 0) {
      setRetailPriceError("retail price must be greater then 0")

    }
    if (!productData.salePrice > 0) {
      setSalePriceError("sale price must be greater then 0")
    }
    if (!parseInt(productData.CategoryId) > 0) {
      setCategoryIdError("select category")
    }

  }


  const handleSave = () => {
    if (!nameError || !categoryIdError || !salePriceError || !retailPriceError || !stockError) {
      //dispatch(addProduct(productData))
      setProductData(defaultProductData)
      setOpen(false)
    }
    console.log("dsdf", productData)
  }

  return (
    <>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth ? maxWidth : 'md'}
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogContent>
          <h4 className={classes.headerContainer}>Add product with all details</h4>
          <div className="row mt-5">

            <div className="col-lg-6">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input onBlur={handleValidate} value={productData.name} onChange={(e) => handleChange(e)} type="text" className="form-control" id="name" placeholder="Enter Product Name" />
                  {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="CategoryId">Category</label>
                    <select
                      onBlur={handleValidate}
                      onChange={(e) => handleChange(e)}
                      id="CategoryId" className="form-control">
                      <option selected disabled>choose</option>
                      {categories.map(cat => (<option key={cat.id} id="CategoryId" value={cat.id} >{cat.name}</option>))}
                    </select>
                    {categoryIdError && <div style={{ color: 'red' }}>{categoryIdError}</div>}
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="stock">Total Stock</label>
                    <input onBlur={handleValidate} value={productData.stock} onChange={(e) => handleChange(e)} type="number" className="form-control" id="stock" style={{ width: '50%' }} />
                    {stockError && <div style={{ color: 'red' }}>{stockError}</div>}

                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="retailPrice">Retail Price</label>
                    <input onBlur={handleValidate} value={productData.retailPrice} onChange={(e) => handleChange(e)} type="number" className="form-control" id="retailPrice" />
                    {retailPriceError && <div style={{ color: 'red' }}>{retailPriceError}</div>}

                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="salePrice">Sale Price</label>
                    <input onBlur={handleValidate} value={productData.salePrice} onChange={(e) => handleChange(e)} type="number" className="form-control" id="salePrice" />
                    {salePriceError && <div style={{ color: 'red' }}>{salePriceError}</div>}

                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 flex-column">
              <div style={{ position: 'relative' }}>
                <div style={{ boxShadow: '0px 3px 6px rgba(0,0,0,0.16)', height: '263px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                  <img src={Image} style={{ width: '100px', height: '100px', objectFit: 'scale-down' }} />
                  <h5>google</h5>
                </div>
                <input type="file" style={{ position: 'absolute', top: '0px ', left: '0px', height: '100%', cursor: 'pointer', opacity: '0' }} />
              </div>

              <Button bgColor='#1774b0' text="Upload" />
            </div>
          </div>
        </DialogContent>
        <div style={{ width: buttonWidth ? buttonWidth : '50%' }} className={classes.buttonsContainer}>
          <Button onClick={() => {
            setProductData(defaultProductData)
            setOpen(false)
          }} text="Cancel" width="100%" bgColor="#ab7171" className={classes.cancel} />
          <Button onClick={() => handleSave()} text="Save" width="100%" className={classes.cancel} />
        </div>

      </Dialog>
    </>
  );
};

export default AddProducts;
