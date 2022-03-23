import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Typography, Box, Grid, Divider, Alert, Button } from "@mui/material";
import Select from "react-select";
import { 
  ZIP_CODES,
  BRANDS,
  TECHIQUE,
} from "../../filter-options";

const options = ZIP_CODES.map((item) => ({
  value: item.zip_code,
  label: `${item.zip_code} (${item.city})`,
}));

const HomePage = () => {
  const [zip, setZip] = useState({});
  const [brand, setBrand] = useState({});
  const [technique, setTechnique] = useState({});

  const [employees, setEmployees] = useState([]);
  const [largeFilters, setLargeFilters] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const getFilteredByZip = async () => {
    try{
      const {
        data: { data },
      } = await axios(`${process.env.REACT_APP_API_URL}/filters/zip/${zip.value}`);
      setEmployees(data);

      if(!data?.length) {
       return setIsOpen(true)
      }   

      setIsOpen(false)
      setLargeFilters(true)
  
    } catch(error) {
      console.log(error.response)
    }
  };

  const getDetailedFilter = async () => {
    try{
      const {
        data: { data },
      } = await axios(`${process.env.REACT_APP_API_URL}/filters/specialization/${zip.value}?brand=${brand.value}&technique=${technique.value}`);
      
      setEmployees(data);
      setIsOpen(false)
      setLargeFilters(true)
  
    } catch(error) {
      if(error.response.data.message === 'Not found') {
        setIsOpen(true)
      }

      setEmployees([])
      setLargeFilters(false)
    }
  }

  useEffect(() => {
    if(zip.value) {
      getFilteredByZip();
    }
  }, [zip]);

  return (
    <Container>
      <Box mt={5}>
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ borderRight: 1 }} p={2}>
            <Typography variant="h4" component="h2">
              Filters
            </Typography>
            <br></br>
            <Select options={options} onChange={setZip} placeholder="Zip Code" />
            <Box pt={5}>
            <Typography variant="h5">Additional filters</Typography>
            <br></br>
            <Select placeholder="Technique" isDisabled={!largeFilters}  options={TECHIQUE} onChange={setTechnique} />
            <br></br>
            <Select placeholder="Brands" isDisabled={!largeFilters} options={BRANDS} onChange={setBrand} />
            <br>
            </br>
              <Button variant="contained" disabled={!largeFilters} onClick={getDetailedFilter}>Find</Button>
            </Box>
            <br></br>
            <br></br>
            {isOpen && <Alert severity="error" onClose={() => setIsOpen(false)}>Not Found</Alert>}
          </Grid>
         {employees?.length ? 
          <Grid item xs={8} p={2}>
            <div>
              {
                employees.map((item) => (
                    <Box mg={3}>
                      <Box pl={2} pt={2}>
                        <Typography>firstName: {item.first_name}</Typography>
                      </Box>
                      <Box pl={2}>
                        <Typography>lastname: {item.last_name}</Typography>
                      </Box>
                      <Box  pl={2} pb={2}>
                        <Typography>email: {item.email}</Typography>
                      </Box>
                      <Divider/>
                    </Box>
                ))}
            </div>
          </Grid>

            : <Box p={3}>
              <Typography>nothing here</Typography>
            </Box>
        }
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
