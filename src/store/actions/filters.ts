import { Action, ActionsUnion, createAction } from 'store/helpers/redux';
import { FiltersActionTypes } from 'store/types/filters';

import {
  SetFiltersData,
  Filters,
  FilterOptionsRes,
} from '../types/filters';

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

  getFilterOptionsRequest: (payload: Filters.brand | Filters.type): Action<
  FiltersActionTypes.GET_FILTER_OPTIONS_REQUEST,
  Filters.brand | Filters.type
  > => createAction(
    FiltersActionTypes.GET_FILTER_OPTIONS_REQUEST,
    payload,
  ),
  getFilterOptionsSuccess: (payload: FilterOptionsRes): Action<
  FiltersActionTypes.GET_FILTER_OPTIONS_SUCCESS,
  FilterOptionsRes
  > => createAction(
    FiltersActionTypes.GET_FILTER_OPTIONS_SUCCESS,
    payload,
  ),
  getFilterOptionsError: (): Action<
  FiltersActionTypes.GET_FILTER_OPTIONS_ERROR
  > => createAction(
    FiltersActionTypes.GET_FILTER_OPTIONS_ERROR,
  ),
};

export type FiltersActionsUnion = ActionsUnion<
  typeof FiltersActions>;
