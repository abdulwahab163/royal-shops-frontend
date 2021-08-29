import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import Image from '../../assets/download.png'
import Button from './../Button'
import { getAllCategories } from './../../redux/actions/category.actions'

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    textAlign: 'center'
  },
}));

const AddProducts = ({ productData, setProductData }) => {
  const classes = useStyles();
  const dispatch = useDispatch()

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

  return (
    <>
      <h4 className={classes.headerContainer}>Add product with all details</h4>
      <div className="row mt-5">

        <div className="col-lg-6">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input value={productData.name} onChange={(e) => handleChange(e)} type="text" className="form-control" id="name" placeholder="Enter Product Name" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="CategoryId">Category</label>
                <select value={categories && productData.CategoryId ? categories.find(item => item.id === productData.CategoryId) : categories && categories.length > 0 ? categories[0] : "choose"}
                  onChange={(e) => handleChange(e)}
                  id="CategoryId" className="form-control">
                  {categories.map(cat => (<option key={cat.id} id="CategoryId" value={cat.id} >{cat.name}</option>))}

                </select>
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="stock">Total Stock</label>
                <input value={productData.stock} onChange={(e) => handleChange(e)} type="number" className="form-control" id="stock" style={{ width: '50%' }} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="retailPrice">Retail Price</label>
                <input value={productData.retailPrice} onChange={(e) => handleChange(e)} type="number" className="form-control" id="retailPrice" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="salePrice">Sale Price</label>
                <input value={productData.salePrice} onChange={(e) => handleChange(e)} type="number" className="form-control" id="salePrice" />
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
    </>
  );
};

export default AddProducts;
