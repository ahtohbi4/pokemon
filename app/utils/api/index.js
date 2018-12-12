import axios from 'axios';

import { API_BASE_URI } from '../../constants';

const api = axios.create({
    baseURL: API_BASE_URI,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    responseType: 'json',
});

export default api;
