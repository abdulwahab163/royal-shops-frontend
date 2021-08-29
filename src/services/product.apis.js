import http from './apiWrapper';

export default class Product {
    /**
     * Add Category
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
         * Get all Categories
         * @returns {Promise <T> | never>}
         */
    getAllProducts = async () => {
        const res = await http.get('/getAllCategories');
        if (res && res?.data?.success) {
            return {
                user: res?.data?.result,
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
      * Get Single Category
      * @returns {Promise <T> | never>}
      */
    getProduct = async (id) => {
        const res = await http.get(`/getCategoryBy/:${id}`);
        if (res && res?.data?.success) {
            return {
                user: res?.data?.result,
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
      * Update Single Category
      * @returns {Promise <T> | never>}
      */
    updateProduct = async (id, name) => {
        const res = await http.put(`/updateCategory/:${id}`, name);
        if (res && res?.data?.success) {
            return {
                user: res?.data?.result,
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
    deleteProduct = async (id) => {
        const res = await http.delete(`/updateCategory/:${id}`);
        if (res && res?.data?.success) {
            return {
                user: res?.data?.result,
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

}
