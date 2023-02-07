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

export type ResponseData = User[];
