import { Action, ActionsUnion, createAction } from 'store/helpers/redux';
import { CurrentAddressActionTypes, CurrentAddressRes } from 'store/types/currentAddress';

// TODO: set valid types to payloads
export const CurrentAddressActions = {
  getCurrentAddressRequest: (payload: number): Action<
  CurrentAddressActionTypes.GET_CURRENT_ADDRESS_REQUEST,
  number
  > => createAction(
    CurrentAddressActionTypes.GET_CURRENT_ADDRESS_REQUEST,
    payload,
  ),
  getCurrentAddressSuccess: (payload: CurrentAddressRes): Action<
  CurrentAddressActionTypes.GET_CURRENT_ADDRESS_SUCCESS,
  CurrentAddressRes
  > => createAction(
    CurrentAddressActionTypes.GET_CURRENT_ADDRESS_SUCCESS,
    payload,
  ),
  getCurrentAddressError: (): Action<
  CurrentAddressActionTypes.GET_CURRENT_ADDRESS_ERROR
  > => createAction(
    CurrentAddressActionTypes.GET_CURRENT_ADDRESS_ERROR,
  ),
};

export type CurrentAddressActionsUnion = ActionsUnion<
    typeof CurrentAddressActions>;
