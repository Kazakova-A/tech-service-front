export enum FiltersActionTypes {
  SET_FILTERS_PROPERTY = 'SET_SELET_PROPERTY',
  CLEAR_FILTERS = 'CLEAR_FILTERS',
}

export type Option = {
  value: string | null,
  label: string | null,
};

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
