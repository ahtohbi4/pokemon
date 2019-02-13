import createAction from 'create-action-ts';

import { ActionTypeKeys } from './constants';

export const setHeaderColor = (color: string) => createAction(ActionTypeKeys.SET_HEADER_COLOR, color);
export type SetHeaderColorActionCreatorType = typeof setHeaderColor;

export const resetHeaderColor = () => createAction(ActionTypeKeys.RESET_HEADER_COLOR);
export type ResetHeaderColorActionCreatorType = typeof resetHeaderColor;

export type ActionType =
    ReturnType<SetHeaderColorActionCreatorType> |
    ReturnType<ResetHeaderColorActionCreatorType>;
