import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Image from '../../assets/download.png'
import Button from './../Button'

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    textAlign: 'center'
  },

}));

const AddProducts = () => {
  const classes = useStyles();

  return (
    <>
      <h4 className={classes.headerContainer}>Add product with all details</h4>
      <div className="row mt-5">

        <div className="col-lg-6">
          <form>
            <div className="form-group">
              <label htmlFor="inputAddress">Name</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="Enter Product Name" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="inputState">Category</label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="inputZip">Total Stock</label>
                <input type="text" className="form-control" id="inputZip" style={{ width: '50%' }} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputZip">Retail Price</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputZip">Sale Price</label>
                <input type="text" className="form-control" id="inputZip" />
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
