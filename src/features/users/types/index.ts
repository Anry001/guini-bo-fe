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
  phoneNumber: boolean;
  phoneVerified: boolean;
  userStatus: UserStatus;
  username: string;
}

interface LocationData {
  address: string;
  geocode: { lat: number; lng: number };
  placeId: string;
}

export interface PartnerStore {
  businessCity: string;
  businessLocation: LocationData;
  businessName: string;
  description: string;
  freeWorkingDistance: number;
  isMobile: boolean;
  maxWorkingDistance: number;
  partnerId: string;
  partnerUsername: string;
  pictures: string[];
  pricePerKm: string;
  profilePicture: string;
  shortestNotice: string;
}

// type ResponseData = PartnerStore[];
