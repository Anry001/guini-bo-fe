type UserStatus =
  | 'UNCONFIRMED'
  | 'CONFIRMED'
  | 'EXTERNAL_PROVIDER'
  | 'ARCHIVED'
  | 'UNKNOWN'
  | 'RESET_REQUIRED'
  | 'FORCE_CHANGE_PASSWORD';

export interface User {
  email: string;
  emailVerified: boolean;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  phoneVerified: boolean;
  userStatus: UserStatus;
  username: string;
}
