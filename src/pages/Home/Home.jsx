import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import {
  Container,
  Typography,
  Box,
  Grid,
  Divider,
  Alert,
  Button,
  Autocomplete,
  TextField,
  InputLabel,
} from "@mui/material";
import Select, { components } from "react-select";
import { ZIP_CODES, BRANDS, TYPES } from "../../filter-options";

const options = ZIP_CODES.map((item) => ({
  value: item.zip_code,
  label: `${item.zip_code} (${item.city})`,
}));

const HomePage = () => {
  const [zip, setZip] = useState({ value: "ff", label: "eee" });
  const [brand, setBrand] = useState({});
  const [type, setType] = useState({});
  const [filters, setFilters] = useState({
    zip: null,
    type: null,
    brand: null,
  });
  const [employees, setEmployees] = useState([]);
  const [largeFilters, setLargeFilters] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const getFilteredByZip = async () => {
    try {
      const {
        data: { data },
      } = await axios(
        `${process.env.REACT_APP_API_URL}/filters/zip/${filters?.zip?.value}`
      );

      setFilters({ ...filters, brand: null, type: null });
      setEmployees(data);

      if (!data?.length) {
        return setIsOpen(true);
      }

      setIsOpen(false);
      setLargeFilters(true);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getDetailedFilter = async () => {
    try {
      const {
        data: { data },
      } = await axios(
        `${process.env.REACT_APP_API_URL}/filters/specialization/${filters?.zip?.value}?brand=${filters?.brand.value}&type=${filters?.type.value}`
      );

      setEmployees(data);
      setIsOpen(false);
      setLargeFilters(true);
    } catch (error) {
      if (error.response.data.message === "Not found") {
        setIsOpen(true);
      }

      setEmployees([]);
      setLargeFilters(false);
    }
  };

  const handleSelect = (event, value, name) => {
    if (name === "zip") {
      setFilters({ [name]: value, brand: null, type: null });
    }
    console.log(event.target.name);
    setFilters({ ...filters, [name]: value });
  };

  const clearValue = () => {
    setEmployees([]);
    setFilters({});
    setEmployees([]);
    setIsOpen(false);
    setLargeFilters(false);
  };

  useEffect(() => {
    if (filters?.zip?.value) {
      getFilteredByZip();
    }
  }, [filters?.zip?.value]);

  return (
    <Container>
      <Box mt={5}>
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ borderRight: 1 }} p={2}>
            <Typography variant="h4" component="h2">
              Filters
            </Typography>
            <Box mt={3} mb={5}>
              <Button size="small" variant="outlined" onClick={clearValue}>
                Clear filters
              </Button>
            </Box>

            <Autocomplete
              disablePortal
              options={options}
              renderInput={(params) => (
                <TextField {...params} label="Zip Code" />
              )}
              value={filters?.zip}
              onChange={(event, value) => handleSelect(event, value, "zip")}
              clearIcon={null}
            />
            <Box pt={5}>
              <Typography variant="h5">Additional filters</Typography>
              <br></br>
              <Autocomplete
                disablePortal
                disabled={!largeFilters}
                options={TYPES}
                renderInput={(params) => (
                  <TextField {...params} label="Types" />
                )}
                value={filters?.type}
                clearIcon={null}
                onChange={(event, value) => handleSelect(event, value, "type")}
              />
              <br></br>
              <Autocomplete
                disabled={!largeFilters}
                disablePortal
                options={BRANDS}
                renderInput={(params) => (
                  <TextField {...params} label="Brands" />
                )}
                value={filters?.brand}
                clearIcon={null}
                onChange={(event, value) => handleSelect(event, value, "brand")}
              />
              <br></br>
              <Button
                variant="contained"
                disabled={!largeFilters || (!filters.brand || !filters.type)}
                onClick={getDetailedFilter}
              >
                Find
              </Button>
            </Box>
            <br></br>
            <br></br>
            {isOpen && (
              <Alert severity="error" onClose={() => setIsOpen(false)}>
                Not Found
              </Alert>
            )}
          </Grid>
          {employees?.length ? (
            <Grid item xs={8} p={2}>
              <div>
                {employees.map((item) => (
                  <Box mg={3} key={item.id}>
                    <Box pl={2} pt={2}>
                      <Typography>employee id: {item.id}</Typography>
                    </Box>
                    <Divider />
                  </Box>
                ))}
              </div>
            </Grid>
          ) : (
            <Box p={3}>
              <Typography>nothing here</Typography>
            </Box>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
