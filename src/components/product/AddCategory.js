import React from 'react'

const AddCategory = ({ categoryName, setCategoryName }) => {
    return (
        <>
            <h4 style={{ textAlign: 'center', marginBottom: 30 }}>Add product with all details</h4>
            <div className="form-group d-flex align-items-center">
                <label style={{
                    maxWidth: 160,
                    width: "100%",
                    margin: 0
                }} htmlFor="inputAddress">Category Name</label>
                <input value={categoryName} type="text" className="form-control" id="inputAddress" placeholder="Enter Category Name"
                    onChange={(e) => setCategoryName(e.target.value)} />
            </div></>
    )
}

export default AddCategory;
