import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useUsers } from '../api/getUsers';
import { User } from '../types';

const columns: GridColDef<User>[] = [
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'emailVerified',
    headerName: 'Email Verified',
    width: 115,
    editable: true,
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 100,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    type: 'number',
    width: 120,
    editable: true,
  },
  {
    field: 'phoneNumber',
    headerName: 'Phone number',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 125,
  },
  {
    field: 'phoneVerified',
    headerName: 'Phone Verified',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 110,
  },
  {
    field: 'userStatus',
    headerName: 'User status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 220,
  },
  {
    field: 'username',
    headerName: 'Username',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 250,
  },
];

const UsersList = () => {
  const { data = [], isLoading } = useUsers();

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.username}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        loading={isLoading}
      />
    </Box>
  );
};

export default UsersList;
