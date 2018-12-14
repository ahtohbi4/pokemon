import { CHANGE_LOCATION } from './constants';

const initialState = {
    router: {
        url: undefined,
        query: {},
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOCATION: {
            const { query, url } = action.payload;

            return {
                ...state,
                router: {
                    query,
                    url,
                },
            };
        }

        default:
            return state;
    }
};
