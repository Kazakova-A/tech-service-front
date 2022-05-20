import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

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

const rows = [
  {
    id: 1, lastName: 'Romanov', firstName: 'Peter the 0', age: 35, email: 'dummy0@example.com',
  },
  {
    id: 2, lastName: 'Romanov', firstName: 'Peter the 1', age: 42, email: 'dummy1@example.com',
  },
  {
    id: 3, lastName: 'Romanov', firstName: 'Peter the 2', age: 45, email: 'dummy2@example.com',
  },
  {
    id: 4, lastName: 'Romanov', firstName: 'Peter the 3', age: 16, email: 'dummy3@example.com',
  },
  {
    id: 5, lastName: 'Romanov', firstName: 'Peter the 4', age: 34, email: 'dummy4@example.com',
  },
  {
    id: 6, lastName: 'Romanov', firstName: 'Peter the 5', age: 50, email: 'dummy5@example.com',
  },
  {
    id: 7, lastName: 'Romanov', firstName: 'Peter the 6', age: 44, email: 'dummy6@example.com',
  },
  {
    id: 8, lastName: 'Romanov', firstName: 'Peter the 7', age: 36, email: 'dummy7@example.com',
  },
  {
    id: 9, lastName: 'Romanov', firstName: 'Peter the 8', age: 65, email: 'dummy8@example.com',
  },
  {
    id: 10, lastName: 'Romanov', firstName: 'Peter the 9', age: 45, email: 'dummy9@example.com',
  },
  {
    id: 11, lastName: 'Romanov', firstName: 'Peter the 10', age: 63, email: 'dummy10@example.com',
  },
  {
    id: 12, lastName: 'Romanov', firstName: 'Peter the 11', age: 60, email: 'dummy11@example.com',
  },
  {
    id: 13, lastName: 'Romanov', firstName: 'Peter the 12', age: 33, email: 'dummy12@example.com',
  },
  {
    id: 14, lastName: 'Romanov', firstName: 'Peter the 13', age: 55, email: 'dummy14@example.com',
  },
  {
    id: 15, lastName: 'Romanov', firstName: 'Peter the 14', age: 25, email: 'dummy15@example.com',
  },
];

export default function TableEmployees() {
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
