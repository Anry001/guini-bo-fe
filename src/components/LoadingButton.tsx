import Button, { ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
}

const LoadingButton = ({
  loading,
  disabled,
  endIcon,
  ...props
}: LoadingButtonProps) => (
  <Button
    {...props}
    endIcon={loading ? <CircularProgress size={20} /> : endIcon}
    disabled={loading || disabled}
  />
);

export default LoadingButton;
