import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

import { Option, Filters } from 'store/types/filters';

export interface SelectProps {
  name: Filters;
  open?: boolean;
  disabled?: boolean;
  options: Option[];
  label: string;
  value: Option;
  onChange: (value: Option | null, name: Filters) => void;
  onClose?: () => void;
  onOpen?:() => void;
  loading?: boolean;
  openOnFocus?: boolean;
  inputValue?: string;
  onInputChange?: (value: string, name: Filters) => void;
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
  inputValue = '',
  onInputChange = () => {},
  open,
}: SelectProps): JSX.Element {
  return (
    <Autocomplete
      disabled={disabled}
      open={open}
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
      inputValue={inputValue}
      onInputChange={(event, val) => onInputChange(val, name)}
    />
  );
}

export default Select;
