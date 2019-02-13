import { ActionTypeKeys } from './constants';

import { ActionType } from './actions';
import { RouterType } from './types';

export interface StoreType {
    readonly router: RouterType,
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
        case ActionTypeKeys.CHANGE_LOCATION:
            return {
                ...state,
                router: {
                    location: action.payload,
                },
            };

        default:
            return state;
    }
};
