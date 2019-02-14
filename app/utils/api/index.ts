import axios from 'axios';

import { ApiUrls } from '@Constants';

const api = axios.create({
    baseURL: ApiUrls.BASE,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    responseType: 'json',
});

export default api;
