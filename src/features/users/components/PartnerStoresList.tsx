import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import { usePartnerStores } from '../api/getPartnerStores';
// import { PartnerStore } from '../types';

const columns: GridColDef<PartnerStore>[] = [
  { field: 'businessCity', headerName: 'Business city', width: 200 },
  {
    field: 'address',
    headerName: 'Address',
    width: 115,
  },
  {
    field: 'lat',
    headerName: 'Latitude',
    width: 100,
  },
  {
    field: 'lng',
    headerName: 'Longitude',
    width: 120,
  },
  {
    field: 'placeId',
    headerName: 'Place ID',
    width: 125,
  },
  {
    field: 'businessName',
    headerName: 'Business Name',
    width: 110,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 220,
  },
  {
    field: 'freeWorkingDistance',
    headerName: 'Free Working Distance',
    width: 250,
  },
  {
    field: 'isMobile',
    headerName: 'Is Mobile',
    width: 250,
  },
  {
    field: 'maxWorkingDistance',
    headerName: 'Max Working Distance',
    width: 250,
  },
  {
    field: 'partnerId',
    headerName: 'Partner Id',
    width: 250,
  },
  {
    field: 'partnerUsername',
    headerName: 'Partner Username',
    width: 250,
  },
  {
    field: 'pictures',
    headerName: 'Pictures',
    width: 250,
  },
  {
    field: 'pricePerKm',
    headerName: 'Price Per Km',
    width: 250,
  },
  {
    field: 'profilePicture',
    headerName: 'Profile Picture',
    width: 250,
  },
  {
    field: 'shortestNotice',
    headerName: 'Shortest Notice',
    width: 250,
  },
];

const PartnerStoresList = () => {
  const { data = [], isLoading } = usePartnerStores();

  return (
    <Box sx={{ height: 'calc(100vh - 82px)', width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.partnerId}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        loading={isLoading}
      />
    </Box>
  );
};

export default PartnerStoresList;
