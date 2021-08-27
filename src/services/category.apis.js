import http from './ApiWrapper';

export default class Category {
    /**
     * Add Category
     * @returns {Promise <T> | never>}
     */
    addCategory = async (data) => {
        const res = await http.post('/admin/createCategory', { name: data });
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
    getAllCategories = async () => {
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
    getCategory = async (id) => {
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
    updateCategory = async (id, name) => {
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

}
