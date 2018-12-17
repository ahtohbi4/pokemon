import { CHANGE_LOCATION } from './constants';

const initialState = {
    router: {
        pathname: undefined,
        query: {},
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOCATION: {
            const { query, pathname } = action.payload;

            return {
                ...state,
                router: {
                    query,
                    pathname,
                },
            };
        }

        default:
            return state;
    }
};
