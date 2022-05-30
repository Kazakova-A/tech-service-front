import * as React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { JobsActions } from 'store/actions/jobs';
import { useEffect } from 'react';
import { RootState } from 'store/reducers';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 110 },
  {
    field: 'customerId',
    headerName: 'Customer Id',
    width: 200,
    editable: true,
  },
  {
    field: 'employeeId',
    headerName: 'Employee Id',
    width: 200,
    editable: true,
  },
  {
    field: 'workStatus',
    headerName: 'Work Status',
    type: 'string',
    width: 200,
    editable: true,
  },
  {
    field: 'brand',
    headerName: 'Brand',
    type: 'string',
    width: 200,
    editable: true,
  },
  {
    field: 'technicTypes',
    headerName: 'Technic Types',
    type: 'string',
    width: 200,
    editable: true,
  },
];

export default function TableJobs() {
  const dispatch = useDispatch();
  const rows = useSelector((state: RootState) => state.jobs.jobs);
  useEffect(() => {
    dispatch(JobsActions.getJobsListRequest());
  }, []);
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={3}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
