import { CHANGE_LOCATION } from './constants';

import { RouteType } from './types';

interface ChangeLocationActionType {
    type: string,
    payload: RouteType,
}

export const changeLocation = (route: RouteType): ChangeLocationActionType => {
    return {
        type: CHANGE_LOCATION,
        payload: route,
    };
};

export type ActionType = ChangeLocationActionType;
