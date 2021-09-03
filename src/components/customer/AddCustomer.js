import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import Button from './../Button'

const useStyles = makeStyles((theme) => ({
    headerContainer: {
        textAlign: 'center'
    },
    buttonsContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 10,

    },
    inputField: {
        width: "55%"
    },
    cancel: {
        marginLeft: 10,
        marginRight: 10
    }
}));

const defaultCustomerData = {
    name: '',
    nationalId: '',
    phone: '',
    address: '',
}

let defaultCustomerError = {
    name: false,
    nationalId: false,
    phone: false,
    address: false,
}

const AddCustomer = ({ customer, open, setOpen, maxWidth, buttonWidth }) => {
    const classes = useStyles();
    const [fullWidth, setFullWidth] = useState(true);

    const [customerData, setCustomerData] = useState(defaultCustomerData)
    const [customerError, setCustomerError] = useState(defaultCustomerError)

    const handleChange = (e) => {
        setCustomerError(defaultCustomerError)
        setCustomerData({
            ...customerData,
            [e.target.id]: e.target.value
        })
    }

    const handleValidate = () => {
        let errorObj = {}
        if (customerData.name.length < 2) {
            errorObj.name = "name must be greater than 2 Characters"
        }
        if (!customerData.nationalId < 0) {
            errorObj.nationalId = "invalid national id"
        }
        if (!customerData.address.length > 0) {
            errorObj.address = "address must be greater than 2 Characters"

        }
        if (!customerData.phone > 0) {
            errorObj.phone = "invalid phone no"
        }
        return errorObj
    }

    const handleSave = () => {
        const errorObj = handleValidate()
        setCustomerError(errorObj)
        if (!errorObj.name && !errorObj.nationalId && !errorObj.phone && !errorObj.address) {
            // dispatch(addProduct(productData))
            setCustomerData(defaultCustomerData)
            setOpen(false)
        }
    }

    return (
        <><Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth ? maxWidth : 'md'}
            open={open}
            onClose={() => setOpen(!open)}
            aria-labelledby="max-width-dialog-title"
        >
            <DialogContent>
                <h4 style={{ textAlign: 'center', marginBottom: 30 }}>Add Your Frequent Customer</h4>
                <div className="form-group d-flex align-items-center">
                    <label style={{
                        maxWidth: 160,
                        width: "100%",
                        margin: 0
                    }} htmlFor="name">Name</label>
                    <div style={{ width: "55%" }}>
                        <input value={customerData.name} type="text" className="form-control" id="name" placeholder="Enter Name"
                            onChange={(e) => handleChange(e)} />
                        {customerError.name && <div style={{ color: 'red' }}>{customerError.name}</div>}</div>

                </div>
                <div className="form-group d-flex align-items-center">
                    <label style={{
                        maxWidth: 160,
                        width: "100%",
                        margin: 0
                    }} htmlFor="address">Address</label>
                    <div style={{ width: "55%" }}>
                        <input value={customerData.address} type="text" className="form-control" id="address" placeholder="Enter Address"
                            onChange={(e) => handleChange(e)} />
                        {customerError.address && <div style={{ color: 'red' }}>{customerError.address}</div>}
                    </div>
                </div>
                <div className="form-group d-flex align-items-center">
                    <label style={{
                        maxWidth: 160,
                        width: "100%",
                        margin: 0
                    }} htmlFor="nationalId">CNIC No</label>
                    <div style={{ width: "55%" }}>
                        <input value={customerData.nationalId} type="number" className="form-control" id="nationalId" placeholder="Enter CNIC No"
                            onChange={(e) => handleChange(e)} />
                        {customerError.nationalId && <div style={{ color: 'red' }}>{customerError.nationalId}</div>}
                    </div>
                </div>
                <div className="form-group d-flex align-items-center">
                    <label style={{
                        maxWidth: 160,
                        width: "100%",
                        margin: 0
                    }} htmlFor="phone">Cell No</label>
                    <div style={{ width: "55%" }}>
                        <input value={customerData.phone} type="number" className="form-control" id="phone" placeholder="Enter Cell No"
                            onChange={(e) => handleChange(e)} />
                        {customerError.phone && <div style={{ color: 'red' }}>{customerError.phone}</div>}
                    </div>
                </div></DialogContent> <div style={{ width: buttonWidth ? buttonWidth : '50%' }} className={classes.buttonsContainer}>
                <Button onClick={() => {
                    setCustomerData(defaultCustomerData)
                    setCustomerError(defaultCustomerError)
                    setOpen(false)
                }} text="Cancel" width="100%" bgColor="#ab7171" className={classes.cancel} />
                <Button onClick={() => handleSave()} text="Save" width="100%" className={classes.cancel} />
            </div></Dialog>
        </>


    )
}

export default AddCustomer;
