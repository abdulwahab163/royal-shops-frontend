import http from './apiWrapper';

export default class Customer {
    /**
     * Add Single Customer
     * @returns {Promise <T> | never>}
     */
    addCustomer = async (customer) => {

        try {
            const res = await http.post('/admin/createCustomer', {
                name: product.name,
                CategoryId: product.CategoryId,
                retailPrice: product.retailPrice,
                salePrice: product.salePrice,
            });
            if (res && res?.data?.success) {
                return {
                    data: res?.data?.addProduct,
                    success: true,
                };
            }

        } catch (error) {
            return {
                success: false,
                message: error.message,
            };
        }

    };
    /**
         * Get All Customers
         * @returns {Promise <T> | never>}
         */
    getAllCustomers = async () => {
        const res = await http.get('admin/getAllCustomers');
        if (res && res?.data?.success) {
            return {
                data: res?.data?.result?.rows,
                success: true,
            };
        } else {
            return {
                success: false,
                status: res?.data?.status,
                message: res?.data?.msg,
            };
        }

    };

    /**
      * Get Single Customer
      * @returns {Promise <T> | never>}
      */
    getCustomer = async (id) => {
        try {
            const res = await http.get(`/admin/getCustomerBy/:${id}`);
            if (res && res?.data?.success) {
                return {
                    data: res?.data?.result,
                    success: true,
                };
            }
        } catch (e) {
            return {
                success: false,
                status: res?.data?.status,
                message: res?.data?.msg,
            };
        }

    };
    /**
      * Update Single Customer
      * @returns {Promise <T> | never>}
      */
    updateCustomer = async (id, name) => {
        const res = await http.put(`/admin/updateCustomer/:${id}`, name);
        if (res && res?.data?.success) {
            return {
                data: res?.data?.result,
                success: true,
            };
        } else {
            return {
                success: false,
                status: res?.data?.status,
                message: res?.data?.msg,
            };
        }

    };
    /**
          * Delete Single Customer
          * @returns {Promise <T> | never>}
          */

    deleteCustomer = async (id) => {
        try {
            const res = await http.delete(`/admin/deleteCustomer/:${id}`);
            if (res && res?.data?.success) {
                return {
                    data: res?.data?.result,
                    success: true,
                };
            }
        } catch (e) {
            return {
                success: false,
                status: res?.data?.status,
                message: res?.data?.msg,
            };
        }

    };

}
