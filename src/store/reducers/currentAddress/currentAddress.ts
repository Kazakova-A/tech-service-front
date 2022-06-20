import { CurrentAddressActionTypes } from 'store/types/currentAddress';
import { CurrentAddressActionsUnion } from 'store/actions/currentAddress';
import { INITIAL_STATE } from './initialState';
import { CurrentAddressState } from './declarations';
import { employees } from '../employees';

const currentAddressReducer = (
  state = INITIAL_STATE,
  action: CurrentAddressActionsUnion,
): CurrentAddressState => {
  switch (action?.type) {
    case CurrentAddressActionTypes.GET_CURRENT_ADDRESS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CurrentAddressActionTypes.GET_CURRENT_ADDRESS_SUCCESS: {
      return {
        ...state,
        currentAddresses: [...state.currentAddresses, action.payload],
        isLoading: false,
      };
    }
    case CurrentAddressActionTypes.GET_CURRENT_ADDRESS_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: return state;
  }
};

export default currentAddressReducer;
