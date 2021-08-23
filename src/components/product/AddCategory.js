import React from 'react'

const AddCategory = () => {
    return (
        <>
            <h4 style={{ textAlign: 'center', marginBottom: 30 }}>Add product with all details</h4>
            <div class="form-group d-flex align-items-center">
                <label style={{
                    maxWidth: 160,
                    width: "100%",
                    margin: 0
                }} for="inputAddress">Category Name</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Enter Category Name" />
            </div></>
    )
}

export default AddCategory;
