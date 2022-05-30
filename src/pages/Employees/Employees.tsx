import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { EmployeesActions } from 'store/actions/employees';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { useEffect } from 'react';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 110 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 150,
    editable: true,
  },
  {
    field: 'zip',
    headerName: 'Zip',
    type: 'integer',
    width: 120,
    editable: true,
  },
  {
    field: 'startTime',
    headerName: 'Start Time',
    type: 'number',
    width: 120,
    editable: true,
  },
  {
    field: 'endTime',
    headerName: 'End Time',
    type: 'number',
    width: 120,
    editable: true,
  },
  {
    field: 'timezone',
    headerName: 'Timezone',
    type: 'string',
    width: 150,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => `${params.getValue(params.id, 'firstName') || ''} ${
      params.getValue(params.id, 'lastName') || ''
    }`,
  },
];

export default function TableEmployees() {
  const dispatch = useDispatch();
  const rows = useSelector((state: RootState) => state.employees.employees);
  useEffect(() => {
    dispatch(EmployeesActions.getEmployeesListRequest());
  }, []);
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
