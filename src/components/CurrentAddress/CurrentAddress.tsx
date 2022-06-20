import React, { useEffect, useState } from 'react';
import {
  Box, Button, Divider, Typography,
} from '@mui/material';

import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { JobsActions } from 'store/actions/jobs';
import { CurrentAddressActions } from 'store/actions/currentAddress';

export interface CurrentAddressProps {
  employeesId: number
}

function CurrentAddress(): JSX.Element {
  const dispatch = useDispatch();
  const typeInput = useSelector((state: RootState) => state.filters.type.inputValue);
  const brandInput = useSelector((state: RootState) => state.filters.brand.inputValue);
  const employeesSchedule = useSelector((state: RootState) => state.employeesScheduled.employeesScheduled);
  const currentAddress = useSelector((state: RootState) => state.currentAddress.currentAddresses);
  const [employeesId, setEmployeesId] = useState(0);
  const dates = Object.keys(employeesSchedule);

  const handleClick = (employeeId: number, scheduledStart: number, scheduledEnd: number, date: string) => {
    const startData = moment(Number(date) * 1000).add(scheduledStart, 'hours').valueOf() / 1000;
    const endData = moment(Number(date) * 1000).add(scheduledEnd, 'hours').valueOf() / 1000;

    const current = {
      customerId: 1,
      employeeId,
      brand: brandInput,
      scheduledStart: startData,
      scheduledEnd: endData,
      technicTypes: typeInput,
    };
    dispatch(JobsActions.addJobsRequest(current));
  };

  useEffect(() => {
    dispatch(CurrentAddressActions.getCurrentAddressRequest(employeesId));
  }, [employeesId]);

  return (
    <div>
      {dates.map((date: string) => (
        <Box m={3} key={date}>
          <Typography>
            {moment(Number(date) * 1000).format('DD-MM-YYYY')}
          </Typography>
          {employeesSchedule[date].map((item: any) => (
            <Box m={3} key={item.employeesSchedule}>
              <Box pl={2} pt={2}>
                <Typography>
                  employee id:
                  {item.employeeId}
                </Typography>
                <Box>
                  {item.workTime.map((work: any) => (
                    <div>
                      <Typography key={item.workTime}>
                        {`${work.start}-${work.end}: `}
                        {work.status}
                      </Typography>
                      <Box mt={3} mb={5}>
                        <Button
                          size="small"
                          variant="contained"
                          onClick={() => handleClick(item.employeeId, work.start, work.end, date)}
                          disabled={work.status !== 'available'}
                        >
                          Create Jobs
                        </Button>
                      </Box>
                    </div>
                  ))}
                </Box>
              </Box>
              <Divider />
            </Box>
          ))}
        </Box>
      ))}
    </div>
  );
}

export default CurrentAddress;
