import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import VerifiedIcon from '@mui/icons-material/Verified';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type SvgIconComponent = typeof ErrorOutlineIcon;

interface PopoverIconProps {
  Icon: SvgIconComponent;
  color: 'disabled' | 'success';
  label: string;
}

const PopoverIcon = ({ Icon, color, label }: PopoverIconProps) => {
  return (
    <Tooltip title={label}>
      <Icon color={color} />
    </Tooltip>
  );
};

interface IconProps {
  verified: boolean;
}

const IconComponent = ({ verified }: IconProps) => {
  return verified ? (
    <PopoverIcon
      Icon={VerifiedIcon}
      color="success"
      label="Phone number is verified"
    />
  ) : (
    <PopoverIcon
      Icon={ErrorOutlineIcon}
      color="disabled"
      label="Phone number is not verified"
    />
  );
};

interface VerifiedIconCellCellProps {
  cellValue: string;
  isCellValueVerified: boolean;
}

const VerifiedIconCell = ({
  cellValue,
  isCellValueVerified,
}: VerifiedIconCellCellProps) => (
  <Stack direction="row" flexWrap="nowrap" alignContent="center" gap={1}>
    <Typography variant="body2">{cellValue}</Typography>
    <IconComponent verified={isCellValueVerified} />
  </Stack>
);

export default VerifiedIconCell;
