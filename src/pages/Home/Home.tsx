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
  const [isZipOpen, setIsZipOpen] = useState<boolean>(false);

  const employees = useSelector((state: RootState) => state.employees.employees);
  const isLoading = useSelector((state: RootState) => state.employees.isLoading);

  const selectedZip = useSelector((state: RootState) => state.filters.zip.selected);
  const selectedType = useSelector((state: RootState) => state.filters.type.selected);
  const selectedBrand = useSelector((state: RootState) => state.filters.brand.selected);

  const zipInput = useSelector((state: RootState) => state.filters.zip.inputValue);
  const typeInput = useSelector((state: RootState) => state.filters.type.inputValue);
  const brandInput = useSelector((state: RootState) => state.filters.brand.inputValue);

  const brandOptions = useSelector((state: RootState) => state.filters.brand.options);
  const typeOptions = useSelector((state: RootState) => state.filters.type.options);
  const zipOptions = useSelector((state: RootState) => state.filters.zip.options);

  const isFiltersLoading = useSelector((state: RootState) => state.filters.isLoading);

  const isAdditionalFiltersEnabled = useMemo(() => (
    selectedZip?.value && employees.length
  ), [selectedZip, employees.length]);

  const getEmployees = () => dispatch(EmployeesActions.getEmployeesRequest());

  const handleSelect = (value: Option | null, name: Filters) => {
    dispatch(FiltersActions.setFiltersProperty({ name, value }));
    if (name === Filters.zip) {
      getEmployees();
    }
  };

  const handleInput = (value: string, name: Filters) => {
    dispatch(FiltersActions.setFiltersInputProperty({ name, value }));

    if (name === Filters.zip) {
      if (value.length > 3) {
        setIsZipOpen(true);
      } else { setIsZipOpen(false); }
    }
  };

  const clearFilters = () => {
    dispatch(FiltersActions.clearFilters());
    dispatch(EmployeesActions.clearList());
  };

  useEffect(() => {
    if (isBrandOpen && !brandOptions.length) {
      dispatch(FiltersActions.getFilterOptionsRequest({ name: Filters.brand }));
    }
    if (isTypeOpen && !typeOptions.length) {
      dispatch(FiltersActions.getFilterOptionsRequest({ name: Filters.type }));
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
              open={isZipOpen}
              options={options}
              label="Zip"
              value={selectedZip as Option}
              onChange={handleSelect}
              onClose={() => setIsZipOpen(false)}
              inputValue={zipInput}
              onInputChange={handleInput}
            />
            <Box pt={5}>
              <Typography variant="h5">Additional filters</Typography>
              <br />
              <Select
                name={Filters.type}
                // disabled={!isAdditionalFiltersEnabled}
                options={typeOptions}
                label="Type"
                value={selectedType as Option}
                loading={isFiltersLoading}
                onClose={() => setIsTypeOpen(false)}
                onOpen={() => setIsTypeOpen(true)}
                onChange={handleSelect}
                inputValue={typeInput}
                onInputChange={handleInput}
              />
              <br />
              <Select
                name={Filters.brand}
                disabled={!isAdditionalFiltersEnabled}
                options={brandOptions}
                label="Brand"
                value={selectedBrand as Option}
                loading={isFiltersLoading}
                onClose={() => setIsBrandOpen(false)}
                onOpen={() => setIsBrandOpen(true)}
                onChange={handleSelect}
                inputValue={brandInput}
                onInputChange={handleInput}
              />
              <br />
              <Button
                variant="contained"
                disabled={!isAdditionalFiltersEnabled || (!selectedBrand?.value || !selectedType?.value)}
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
                  <Box m={3} key={item.id}>
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
