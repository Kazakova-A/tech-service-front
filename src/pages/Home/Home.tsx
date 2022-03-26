import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Typography,
  Box,
  Grid,
  Divider,
  Button,
  Autocomplete,
  TextField,
  CircularProgress,
} from '@mui/material';

import { RootState } from 'store/reducers';
import { FiltersActions } from 'store/actions/filters';
import { Option, Filters } from 'store/types/filters';
import { EmployeesActions } from 'store/actions/employees';

import { ZIP_CODES, BRANDS, TYPES } from '../../filter-options';

const options = ZIP_CODES.map((item) => ({
  value: item.zip_code,
  label: `${item.zip_code} (${item.city})`,
}));

function HomePage() {
  const dispatch = useDispatch();

  const { zip, type, brand } = useSelector((state: RootState) => state.filters);
  const employees = useSelector((state: RootState) => state.employees.employees);
  const isLoading = useSelector((state: RootState) => state.employees.isLoading);
  const isAdditionalFiltersEnabled = useMemo(() => zip.value && employees.length, [zip, employees.length]);

  const getEmployees = () => dispatch(EmployeesActions.getEmployeesRequest());

  const handleSelect = (value: Option | null, name: Filters) => {
    dispatch(FiltersActions.setFiltersProperty({ name, value }));
    if (name === Filters.zip) {
      getEmployees();
    }
  };

  const clearFilters = () => {
    dispatch(FiltersActions.clearFilters());
    dispatch(EmployeesActions.clearList());
  };

  return (
    <Container>
      <Box mt={5}>
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ borderRight: 1 }} p={2}>
            <Typography variant="h4" component="h2">
              Filters
            </Typography>
            <Box mt={3} mb={5}>
              <Button
                size="small"
                variant="outlined"
                onClick={clearFilters}
              >
                Clear filters
              </Button>
            </Box>

            <Autocomplete
              disablePortal
              options={options}
              renderInput={(params) => (
                <TextField {...params} label="Zip Code" />
              )}
              value={zip}
              onChange={(event, value) => handleSelect(value, Filters.zip)}
              clearIcon={null}
            />
            <Box pt={5}>
              <Typography variant="h5">Additional filters</Typography>
              <br />
              <Autocomplete
                disablePortal
                disabled={!isAdditionalFiltersEnabled}
                options={TYPES}
                renderInput={(params) => (
                  <TextField {...params} label="Types" />
                )}
                value={type}
                clearIcon={null}
                onChange={(event, value) => handleSelect(value, Filters.type)}
              />
              <br />
              <Autocomplete
                disabled={!isAdditionalFiltersEnabled}
                disablePortal
                options={BRANDS}
                renderInput={(params) => (
                  <TextField {...params} label="Brands" />
                )}
                value={brand}
                clearIcon={null}
                onChange={(event, value) => handleSelect(value, Filters.brand)}
              />
              <br />
              <Button
                variant="contained"
                disabled={!isAdditionalFiltersEnabled || (!brand.value || !type.value)}
                onClick={getEmployees}
              >
                Find
              </Button>
            </Box>
          </Grid>
          {employees?.length ? (
            <Grid item xs={8} p={2}>
              <div>
                {employees.map((item) => (
                  <Box m={3}>
                    <Box pl={2} pt={2}>
                      <Typography>
                        employee id:
                        {item.id}
                      </Typography>
                    </Box>
                    <Divider />
                  </Box>
                ))}
              </div>
            </Grid>
          ) : (
            <Box p={3}>
              {isLoading && <CircularProgress />}
            </Box>
          )}
        </Grid>
      </Box>
    </Container>
  );
}

export default HomePage;
