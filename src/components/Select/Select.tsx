import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

import { Option, Filters } from 'store/types/filters';

export interface SelectProps {
  name: Filters;
  disabled?: boolean;
  options: Option[];
  label: string;
  value: Option;
  onChange: (value: Option | null, name: Filters) => void;
  onClose?: () => void;
  onOpen?:() => void;
  loading?: boolean;
  openOnFocus?: boolean;
}

function Select({
  name,
  disabled = false,
  options,
  label,
  value,
  onChange,
  onClose = () => {},
  onOpen = () => {},
  loading = false,
  openOnFocus = true,
}: SelectProps): JSX.Element {
  return (
    <Autocomplete
      disabled={disabled}
      disablePortal
      options={options}
      loading={loading}
      openOnFocus={openOnFocus}
      renderInput={(params) => (
        <TextField {...params} label={label} />
      )}
      value={value}
      clearIcon={null}
      onClose={onClose}
      onOpen={onOpen}
      onChange={(event, val) => onChange(val, name)}
    />
  );
}

export default Select;
