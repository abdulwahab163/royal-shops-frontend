import http from './apiWrapper';

export default class Product {
    /**
     * Add Single Product
     * @returns {Promise <T> | never>}
     */
    addProduct = async (product) => {

        try {
            const res = await http.post('/admin/createProduct', {
                name: product.name,
                CategoryId: product.CategoryId,
                retailPrice: product.retailPrice,
                salePrice: product.salePrice,
                stock: product.stock
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
         * Get All Products
         * @returns {Promise <T> | never>}
         */
    getAllProducts = async () => {
        const res = await http.get('admin/getAllProducts');
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
      * Get Single Product
      * @returns {Promise <T> | never>}
      */
    getProduct = async (id) => {
        try {
            const res = await http.get(`/admin/getProductBy/:${id}`);
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
      * Update Single Product
      * @returns {Promise <T> | never>}
      */
    updateProduct = async (id, name) => {
        const res = await http.put(`/admin/updateProduct/:${id}`, name);
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
          * Delete Single Product
          * @returns {Promise <T> | never>}
          */

    deleteProduct = async (id) => {
        try {
            const res = await http.delete(`/admin/deleteProduct/:${id}`);
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
