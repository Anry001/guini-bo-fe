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
