import { CHANGE_LOCATION } from './constants';

const initialState = {
    router: {
        page: null,
        params: {},
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOCATION: {
            const { page, ...params } = action.payload;

            return {
                ...state,
                router: {
                    page,
                    params,
                },
            };
        }

        default:
            return state;
    }
};
