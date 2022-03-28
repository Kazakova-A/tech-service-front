import React, { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Typography,
  Box,
  Grid,
  Divider,
  Button,
  CircularProgress,
} from '@mui/material';

import { RootState } from 'store/reducers';
import { FiltersActions } from 'store/actions/filters';
import { Option, Filters } from 'store/types/filters';
import { EmployeesActions } from 'store/actions/employees';
import Select from 'components/Select';

import { ZIP_CODES } from '../../filter-options';

const options = ZIP_CODES.map((item) => ({
  value: item.zip_code,
  label: `${item.zip_code} (${item.city})`,
}));

function HomePage() {
  const dispatch = useDispatch();

  const [isBrandOpen, setIsBrandOpen] = useState<boolean>(false);
  const [isTypeOpen, setIsTypeOpen] = useState<boolean>(false);

  const { zip, type, brand } = useSelector((state: RootState) => state.filters);
  const employees = useSelector((state: RootState) => state.employees.employees);
  const isLoading = useSelector((state: RootState) => state.employees.isLoading);
  const brandOptions = useSelector((state: RootState) => state.filters.brandOptions);
  const typeOptions = useSelector((state: RootState) => state.filters.typeOptions);

  const isFiltersLoading = useSelector((state: RootState) => state.filters.isLoading);

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

  useEffect(() => {
    if (isBrandOpen && !brandOptions.length) {
      dispatch(FiltersActions.getFilterOptionsRequest(Filters.brand));
    }
    if (isTypeOpen && !typeOptions.length) {
      dispatch(FiltersActions.getFilterOptionsRequest(Filters.type));
    }
  }, [isBrandOpen, isTypeOpen, brandOptions.length, typeOptions.length]);

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
            <Select
              name={Filters.zip}
              options={options}
              label="Zip"
              value={zip}
              onChange={handleSelect}
            />
            <Box pt={5}>
              <Typography variant="h5">Additional filters</Typography>
              <br />
              <Select
                name={Filters.type}
                disabled={!isAdditionalFiltersEnabled}
                options={typeOptions}
                label="Type"
                value={type}
                loading={isFiltersLoading}
                onClose={() => setIsTypeOpen(false)}
                onOpen={() => setIsTypeOpen(true)}
                onChange={handleSelect}
              />
              <br />
              <Select
                name={Filters.brand}
                disabled={!isAdditionalFiltersEnabled}
                options={brandOptions}
                label="Brand"
                value={brand}
                loading={isFiltersLoading}
                onClose={() => setIsBrandOpen(false)}
                onOpen={() => setIsBrandOpen(true)}
                onChange={handleSelect}
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
