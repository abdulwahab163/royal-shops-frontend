import React from 'react'

const AddCustomer = ({ customerData, setCustomerData }) => {


    const handleChange = (e) => {
        setCustomerData({
            ...customerData,
            [e.target.name]: e.target.value
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
                }} htmlFor="inputAddress">Name</label>
                <input name='name' value={customerData.name} type="text" className="form-control" id="inputAddress" placeholder="Enter Name"
                    onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group d-flex align-items-center">
                <label style={{
                    maxWidth: 160,
                    width: "100%",
                    margin: 0
                }} htmlFor="inputAddress">Address</label>
                <input name='address' value={customerData.address} type="text" className="form-control" id="inputAddress" placeholder="Enter Address"
                    onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group d-flex align-items-center">
                <label style={{
                    maxWidth: 160,
                    width: "100%",
                    margin: 0
                }} htmlFor="inputAddress">CNIC No</label>
                <input name='nationalId' value={customerData.nationalId} type="text" className="form-control" id="inputAddress" placeholder="Enter CNIC No"
                    onChange={(e) => handleChange(e)} />

            </div>
            <div className="form-group d-flex align-items-center">
                <label style={{
                    maxWidth: 160,
                    width: "100%",
                    margin: 0
                }} htmlFor="inputAddress">Cell No</label>
                <input name='phone' value={customerData.phone} type="text" className="form-control" id="inputAddress" placeholder="Enter Cell No"
                    onChange={(e) => handleChange(e)} />
            </div>
        </>


    )
}

export default AddCustomer;
