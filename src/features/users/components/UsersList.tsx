import apiRequest from '@utils/apiRequest';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { ResponseData } from '../types';
// import { getUsers } from '../api/getUsers';

// build the columns arabicly

type UserStatus =
  | 'UNCONFIRMED'
  | 'CONFIRMED'
  | 'EXTERNAL_PROVIDER'
  | 'ARCHIVED'
  | 'UNKNOWN'
  | 'RESET_REQUIRED'
  | 'FORCE_CHANGE_PASSWORD';

interface User {
  email: string;
  emailVerified: boolean;
  firstName: string;
  lastName: string;
  phoneNumber: boolean;
  phoneVerified: boolean;
  userStatus: UserStatus;
  username: string;
}

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

const UsersList = () => {
  const [rows, setRows] = useState<ResponseData>([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await apiRequest.get<ResponseData>('/admin/api/users');
      setRows(res.data);
    };
    getUsers();
  }, [rows]); // {q} ask guy if this should be like this?

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.username}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default UsersList;
