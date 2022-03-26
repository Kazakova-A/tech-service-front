import { Action, ActionsUnion, createAction } from 'store/helpers/redux';
import { FiltersActionTypes } from 'store/types/filters';

import { SetFiltersData } from '../types/filters';

// TODO: set valid types to payloads
export const FiltersActions = {
  setFiltersProperty: (payload: SetFiltersData): Action<
  FiltersActionTypes.SET_FILTERS_PROPERTY,
  SetFiltersData
  > => createAction(
    FiltersActionTypes.SET_FILTERS_PROPERTY,
    payload,
  ),
  clearFilters: (): Action<
  FiltersActionTypes.CLEAR_FILTERS
  > => createAction(
    FiltersActionTypes.CLEAR_FILTERS,
  ),
};

export type FiltersActionsUnion = ActionsUnion<
  typeof FiltersActions>;
