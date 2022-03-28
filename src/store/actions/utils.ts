import {
  UtilsActionTypes,
  NotificationTypes,
} from 'store/types/utils';
import { Action, ActionsUnion, createAction } from 'store/helpers/redux';

export const UtilsActions = {
  openNotification: (payload: NotificationTypes): Action<
  UtilsActionTypes.OPEN_NOTIFICATION,
  NotificationTypes
  > => createAction(
    UtilsActionTypes.OPEN_NOTIFICATION,
    payload,
  ),
  closeNotification: (): Action<
  UtilsActionTypes.CLOSE_NOTIFICATION
  > => createAction(
    UtilsActionTypes.CLOSE_NOTIFICATION,
  ),
  clearNotification: (): Action<
  UtilsActionTypes.CLEAR_NOTIFICATION
  > => createAction(
    UtilsActionTypes.CLEAR_NOTIFICATION,
  ),
};

export type UtilsActionsUnion = ActionsUnion<
  typeof UtilsActions>;
