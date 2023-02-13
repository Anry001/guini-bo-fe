import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useUsers } from '../api/getUsers';
import { User } from '../types';

const columns: GridColDef<User>[] = [
  { field: 'email', headerName: 'ID', width: 90 },
  {
    field: 'emailVerified',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'firstName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'phoneNumber',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'phoneVerified',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'userStatus',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'username',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

export const UsersList = () => {
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

// export default UsersList;
