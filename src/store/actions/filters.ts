import { Action, ActionsUnion, createAction } from 'store/helpers/redux';
import { FiltersActionTypes } from 'store/types/filters';

import {
  SetFiltersData,
  FilterOptionsReq,
  FilterOptionsRes,
  InputProperty,
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
  setFiltersInputProperty: (payload: InputProperty): Action<
  FiltersActionTypes.SET_FILTERS_INPUT_PROPERTY,
  InputProperty
  > => createAction(
    FiltersActionTypes.SET_FILTERS_INPUT_PROPERTY,
    payload,
  ),
  clearFilters: (): Action<
  FiltersActionTypes.CLEAR_FILTERS
  > => createAction(
    FiltersActionTypes.CLEAR_FILTERS,
  ),

  getFilterOptionsRequest: (payload: FilterOptionsReq): Action<
  FiltersActionTypes.GET_FILTER_OPTIONS_REQUEST,
  FilterOptionsReq
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
