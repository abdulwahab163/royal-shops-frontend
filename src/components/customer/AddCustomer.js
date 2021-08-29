import React from 'react'

const AddCustomer = ({ customerData, setCustomerData }) => {


    const handleChange = (e) => {
        setCustomerData({
            ...customerData,
            [e.target.id]: e.target.value
        })
    }

    return (
        <>
            <h4 style={{ textAlign: 'center', marginBottom: 30 }}>Add Your Frequent Customer</h4>
            <div className="form-group d-flex align-items-center">
                <label style={{
                    maxWidth: 160,
                    width: "100%",
                    margin: 0
                }} htmlFor="name">Name</label>
                <input value={customerData.name} type="text" className="form-control" id="name" placeholder="Enter Name"
                    onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group d-flex align-items-center">
                <label style={{
                    maxWidth: 160,
                    width: "100%",
                    margin: 0
                }} htmlFor="address">Address</label>
                <input value={customerData.address} type="text" className="form-control" id="address" placeholder="Enter Address"
                    onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group d-flex align-items-center">
                <label style={{
                    maxWidth: 160,
                    width: "100%",
                    margin: 0
                }} htmlFor="nationalId">CNIC No</label>
                <input value={customerData.nationalId} type="text" className="form-control" id="nationalId" placeholder="Enter CNIC No"
                    onChange={(e) => handleChange(e)} />

            </div>
            <div className="form-group d-flex align-items-center">
                <label style={{
                    maxWidth: 160,
                    width: "100%",
                    margin: 0
                }} htmlFor="phone">Cell No</label>
                <input value={customerData.phone} type="text" className="form-control" id="phone" placeholder="Enter Cell No"
                    onChange={(e) => handleChange(e)} />
            </div>
        </>


    )
}

export default AddCustomer;
