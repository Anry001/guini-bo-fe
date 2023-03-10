import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useUsers } from '../api/getUsers';
import { User } from '../types';
import VerifiedIconCell from './VerifiedIconCell';

const columns: GridColDef<User>[] = [
  {
    field: 'username',
    headerName: 'Username',
    width: 250,
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 100,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 120,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
    renderCell: (params) => (
      <VerifiedIconCell
        cellValue={params.row.email}
        isCellValueVerified={params.row.emailVerified}
      />
    ),
  },
  {
    field: 'userStatus',
    headerName: 'User status',
    width: 220,
  },
  {
    field: 'phoneNumber',
    headerName: 'Phone number',
    sortable: true,
    width: 160,
    renderCell: (params) => (
      <VerifiedIconCell
        cellValue={params.row.phoneNumber}
        isCellValueVerified={params.row.phoneVerified}
      />
    ),
  },
];

const UsersList = () => {
  const { data = [], isLoading } = useUsers();

  return (
    <Box sx={{ height: 'calc(100vh - 82px)', width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.username}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        loading={isLoading}
      />
    </Box>
  );
};

export default UsersList;
