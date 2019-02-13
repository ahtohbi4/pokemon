import { ActionType } from './actions';
import { ActionTypeKeys } from './constants';

export interface StoreType {
    readonly headerColor?: string,
}

const initialState: StoreType = {
    headerColor: undefined,
};

export default (state: StoreType = initialState, action: ActionType) => {
    switch (action.type) {
        case ActionTypeKeys.SET_HEADER_COLOR:
            return {
                ...state,
                headerColor: action.payload,
            };

        case ActionTypeKeys.RESET_HEADER_COLOR:
            return {
                ...state,
                headerColor: initialState.headerColor,
            };

        default:
            return state;
    }
}
