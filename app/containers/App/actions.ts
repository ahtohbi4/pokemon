import createAction from 'create-action-ts';

import { ActionTypeKeys } from './constants';

/**
 * Creates an action to set the header color.
 *
 * @param {string} color
 */
export const setHeaderColor = (color: string) => createAction(ActionTypeKeys.SET_HEADER_COLOR, color);
export type SetHeaderColorActionCreatorType = typeof setHeaderColor;

/**
 * Creates an action to reset a header color.
 */
export const resetHeaderColor = () => createAction(ActionTypeKeys.RESET_HEADER_COLOR);
export type ResetHeaderColorActionCreatorType = typeof resetHeaderColor;

export type ActionType =
    ReturnType<SetHeaderColorActionCreatorType> |
    ReturnType<ResetHeaderColorActionCreatorType>;
