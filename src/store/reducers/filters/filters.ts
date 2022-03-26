import {
  FiltersActionTypes, Filters, SetFiltersData, FiltersData,
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

      let changes: Partial<FiltersData> = {
        [name]: value,
      };

      if (name === Filters.zip) {
        changes = {
          ...changes,
          [`${Filters.type}`]: INITIAL_STATE[`${Filters.type}`],
          [`${Filters.brand}`]: INITIAL_STATE[`${Filters.brand}`],
        };
      }

      return {
        ...state,
        ...changes,
      };
    }
    case FiltersActionTypes.CLEAR_FILTERS: {
      return {
        ...INITIAL_STATE,
      };
    }
    default: return state;
  }
};

export default filtersReducer;