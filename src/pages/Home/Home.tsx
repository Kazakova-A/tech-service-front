import React, { useState, useEffect } from 'react';
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
import moment from 'moment';

import { RootState } from 'store/reducers';
import { FiltersActions } from 'store/actions/filters';
import { UtilsActions } from 'store/actions/utils';
import { Option, Filters } from 'store/types/filters';
import { EmployeesActions } from 'store/actions/employees';
import Select from 'components/Select';

function HomePage() {
  const dispatch = useDispatch();

  const [isBrandOpen, setIsBrandOpen] = useState<boolean>(false);
  const [isTypeOpen, setIsTypeOpen] = useState<boolean>(false);
  const [isZipOpen, setIsZipOpen] = useState<boolean>(false);

  const employeesSchedule = useSelector((state: RootState) => state.employees.employees);
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

  const getEmployees = () => dispatch(EmployeesActions.getEmployeesRequest());

  const handleSelect = (value: Option | null, name: Filters) => {
    dispatch(FiltersActions.setFiltersProperty({ name, value }));
  };

  const dates = Object.keys(employeesSchedule);

  const handleInput = (value: string, name: Filters) => {
    const payload = {
      name,
      value,
    };
    if (name === Filters.zip) {
      if (value) {
        payload.value = value.replace(/[^0-9]+/g, '');
        if (value.length === 3) {
          setIsZipOpen(true);
        }
      } else { setIsZipOpen(false); }
    }
    dispatch(FiltersActions.setFiltersInputProperty(payload));
  };

  const clearFilters = () => {
    dispatch(FiltersActions.clearFilters());
    dispatch(EmployeesActions.clearList());
  };

  useEffect(() => {
    if (zipInput.length === 5) {
      const isExist = zipOptions.find((item) => item.value === zipInput);

      if (!isExist) {
        dispatch(UtilsActions.openNotification({
          text: "Options was't found",
          type: 'info',
        }));
      }
    }
  }, [zipOptions, zipInput]);

  useEffect(() => {
    if (isBrandOpen && !brandOptions.length) {
      dispatch(FiltersActions.getFilterOptionsRequest({ name: Filters.brand }));
    }
    if (isTypeOpen && !typeOptions.length) {
      dispatch(FiltersActions.getFilterOptionsRequest({ name: Filters.type }));
    }
    if (isZipOpen && String(zipInput).length === 3) {
      dispatch(FiltersActions.getFilterOptionsRequest({ name: Filters.zip, zipValue: zipInput }));
    }
  }, [
    isBrandOpen,
    isTypeOpen,
    brandOptions.length,
    typeOptions.length,
    isZipOpen,
    zipInput,
  ]);

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
            {selectedZip?.city && <Typography variant="body1">{selectedZip?.city}</Typography>}
            <br />
            <Select
              name={Filters.zip}
              open={isZipOpen}
              options={zipOptions}
              label="Zip"
              value={selectedZip as Option}
              onChange={handleSelect}
              onClose={() => setIsZipOpen(false)}
              inputValue={zipInput}
              onInputChange={handleInput}
              loading={isFiltersLoading}
            />
            <Box pt={5}>
              <Typography variant="h5">Additional filters</Typography>
              <br />
              <Select
                name={Filters.type}
                disabled={!selectedZip?.value}
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
                disabled={!selectedZip?.value}
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
                disabled={!selectedZip?.value
                  || (!selectedBrand?.value || !selectedType?.value)}
                onClick={getEmployees}
              >
                Find
              </Button>
            </Box>
          </Grid>
          {dates?.length ? (
            <Grid item xs={8} p={2}>
              <div>
                {dates.map((date: string) => (
                  <Box m={3} key={date}>
                    <Typography>
                      {moment(Number(date) * 1000).format('DD-MM-YYYY')}
                    </Typography>
                    {employeesSchedule[date].map((item: any) => (
                      <Box m={3} key={item.employeeId}>
                        <Box pl={2} pt={2}>
                          <Typography>
                            employee id:
                            {item.employeeId}
                          </Typography>
                          <Box>
                            {item.workTime.map((work: any) => (
                              <Typography>
                                {`${work.start}-${work.end}: `}
                                {work.status}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                        <Divider />
                      </Box>
                    ))}
                  </Box>
                ))}
                {/* {employeesSchedule.map((item: any) => (
                  <Box m={3} key={item.id}>
                    <Box pl={2} pt={2}>
                      <Typography>
                        employee id:
                        {item.id}
                      </Typography>
                    </Box>
                    <Divider />
                  </Box>
                ))} */}
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
