import { toast } from 'react-toastify';

export function toastMessage(message = null, type = 'error') {
    if (typeof message === 'object') {
        for (const value of Object.values(message)) {
            if (Array.isArray(value) && value.length > 0) {
                toast[type](value[0]);
            } else {
                toast[type](value);
            }
        }
        return;
    }
    toast[type](message);
}