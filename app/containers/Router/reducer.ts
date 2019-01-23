import { CHANGE_LOCATION } from './constants';

import { ActionType } from './actions';
import { RouterType } from './types';

export interface StoreType {
    router: RouterType,
}

const initialState: StoreType = {
    router: {
        location: {
            pathname: undefined,
            query: {},
        },
    },
};

export default (state: StoreType = initialState, action: ActionType) => {
    switch (action.type) {
        case CHANGE_LOCATION: {
            const { query, pathname } = action.payload;

            return {
                ...state,
                router: {
                    location: {
                        query,
                        pathname,
                    },
                },
            };
        }

        default:
            return state;
    }
};
