import http from './apiWrapper';

export default class Product {
    /**
     * Add Category
     * @returns {Promise <T> | never>}
     */
    addProduct = async (product) => {
        const res = await http.post('/admin/createCategory', { product });
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
