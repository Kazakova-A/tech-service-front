export enum FiltersActionTypes {
  SET_FILTERS_PROPERTY = 'SET_FILTERS_PROPERTY',
  SET_FILTERS_INPUT_PROPERTY = 'SET_FILTERS_INPUT_PROPERTY',

  CLEAR_FILTERS = 'CLEAR_FILTERS',

  GET_FILTER_OPTIONS_REQUEST = 'GET_FILTER_OPTIONS_REQUEST',
  GET_FILTER_OPTIONS_SUCCESS = 'GET_FILTER_OPTIONS_SUCCESS',
  GET_FILTER_OPTIONS_ERROR = 'GET_FILTER_OPTIONS_ERROR',
}

export type Option = {
  value: string | null,
  label: string | null,
};

export interface FiltersOptions extends Option {
  id: number;
  city?: string;
}

export interface FiltersData {
  zip: Option;
  type: Option;
  brand: Option;
}

export enum Filters {
  zip = 'zip',
  type = 'type',
  brand = 'brand',
}

export interface SetFiltersData {
  name: Filters;
  value: Option | null;
}

export interface FilterOptionsRes {
  options: FiltersOptions[],
  name: Filters,
}

export interface FilterOptionsReq {
  zipValue?: string | null,
  name: Filters,
}

export interface InputProperty {
  name: Filters;
  value: string | null;
}
