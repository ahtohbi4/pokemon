import createAction from 'create-action-ts';
import { ActionTypeKeys } from './constants';

import { RouteType } from './types';

/**
 * Creates an action to change route location.
 *
 * @param {RouteType} route
 */
export const changeLocation = (route: RouteType) => createAction(ActionTypeKeys.CHANGE_LOCATION, route);
export type ChangeLocationActionCreatorType = typeof changeLocation;

export type ActionType = ReturnType<ChangeLocationActionCreatorType>;
