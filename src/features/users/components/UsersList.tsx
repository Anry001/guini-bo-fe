import apiRequest from '@utils/apiRequest';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { keys } from 'ts-transformer-keys';
import { ResponseData } from '../types';
// import { getUsers } from '../api/getUsers';

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

const getUsers = async () => {
  const res = await apiRequest.get<ResponseData>('/admin/api/users');
  // return res.data;
  const keyColumns = keys<User>();

  const columns: GridColDef[] = [
    keyColumns.map((key) => {( field: key, headerName: key, width: 90 )}),
  ];
};
// i want to return an array of objects that each object

// {q} should i make a method that converts the response and returns the converted value?
// i need for each user in the response to put in a new object.

/* const convert = () => {
  const [data]: ResponseData[] = getUsers();
  const columns: GridColDef[] = [data.forEach(element => {

  });]
};
 */

const UsersList = () => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
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

const columns: GridColDef<User>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
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
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

interface RawData {
  prop1: number;
  prop2: string;
  prop3: {
    prop4: number;
    prop5: string;
  };
  prop6: {
    prop7: number;
    prop8: string;
    prop9: {
      prop10: number;
      prop11: string;
    };
  };
}

interface FlattenedData {
  prop1: number;
  prop2: string;
  prop3Prop4: number;
  prop3Prop5: string;
  prop6Prop7: number;
  prop6Prop8: string;
  prop6Prop9Prop10: number;
  prop6Prop9Prop11: string;
}

const flatten = ({
  prop1,
  prop2,
  prop3: { prop4, prop5 },
  prop6: {
    prop7,
    prop8,
    prop9: { prop10, prop11 },
  },
}: RawData): FlattenedData => ({
  prop1,
  prop2,
  prop3Prop4: prop4,
  prop3Prop5: prop5,
  prop6Prop7: prop7,
  prop6Prop8: prop8,
  prop6Prop9Prop10: prop10,
  prop6Prop9Prop11: prop11,
});

const convert = (dataArray: RawData[]): FlattenedData[] => {
  return dataArray.map(flatten);
};
