import {
  FiltersActionTypes,
  Filters,
  SetFiltersData,
} from 'store/types/filters';
import { FiltersActionsUnion } from 'store/actions/filters';

import { INITIAL_STATE } from './initialState';
import { FiltersState } from './declarations';

const filtersReducer = (
  state = INITIAL_STATE,
  action: FiltersActionsUnion,
): FiltersState => {
  switch (action.type) {
    case FiltersActionTypes.SET_FILTERS_PROPERTY: {
      const { name, value }: SetFiltersData = action.payload;

      let changes: any = {
        [name]: {
          ...state[name],
          selected: value,
        },
      };

      if (name === Filters.zip) {
        changes = {
          ...changes,
          type: { ...state.type, selected: null },
          brand: { ...state.brand, selected: null },
        };
      }

      return {
        ...state,
        ...changes,
      };
    }
    case FiltersActionTypes.SET_FILTERS_INPUT_PROPERTY: {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: {
          ...state[name], inputValue: value,
        },

      };
    }
    case FiltersActionTypes.CLEAR_FILTERS: {
      return {
        ...state,
        zip: INITIAL_STATE.zip,
        type: INITIAL_STATE.type,
        brand: INITIAL_STATE.brand,
      };
    }
    case FiltersActionTypes.GET_FILTER_OPTIONS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FiltersActionTypes.GET_FILTER_OPTIONS_SUCCESS: {
      const { options, name } = action.payload;

      return {
        ...state,
        isLoading: false,
        [name]: {
          ...state[name],
          options,
        },
      };
    }
    case FiltersActionTypes.GET_FILTER_OPTIONS_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: return state;
  }
};

export default filtersReducer;
