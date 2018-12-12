import { CHANGE_LOCATION } from './constants';

export const changeLocation = (route) => {
    return {
        type: CHANGE_LOCATION,
        payload: route,
    };
};
