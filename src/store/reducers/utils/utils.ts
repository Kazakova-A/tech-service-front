import { UtilsActionTypes } from 'store/types/utils';
import { UtilsActionsUnion } from 'store/actions/utils';

import { INITIAL_STATE } from './initialState';
import { UtilsState } from './declarations';

const utilsReducer = (
  state = INITIAL_STATE,
  action: UtilsActionsUnion,
): UtilsState => {
  switch (action.type) {
    case UtilsActionTypes.OPEN_NOTIFICATION: {
      return {
        ...state,
        notification: {
          isOpen: true,
          type: action.payload.type,
          text: action.payload.text,
        },
      };
    }
    case UtilsActionTypes.CLOSE_NOTIFICATION: {
      return {
        ...state,
        notification: {
          ...state.notification,
          isOpen: false,
        },
      };
    }
    case UtilsActionTypes.CLEAR_NOTIFICATION: {
      return {
        ...state,
        notification: INITIAL_STATE.notification,
      };
    }
    default: return state;
  }
};

export default utilsReducer;
