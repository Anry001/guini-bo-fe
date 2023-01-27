import LocalStorage from '@features/local-storage';
import { create } from 'zustand';

export interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  groups: string[];
  role: string;
  username: string;
  verified: boolean;
}
export interface AuthData {
  accessToken: string;
  refreshToken: string;
  user: User;
}

declare module 'local-storage-data' {
  interface LocalStorageData {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
  }
}

interface UseAuthStoreData {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  setUserData: (data: AuthData) => void;
  logout: () => void;
}

const useAuthStore = create<UseAuthStoreData>((set) => ({
  user: LocalStorage.getItem('user'),
  accessToken: LocalStorage.getItem('accessToken'),
  refreshToken: LocalStorage.getItem('refreshToken'),

  setUserData: ({ user, accessToken, refreshToken }) => {
    set({ user, accessToken, refreshToken });
    LocalStorage.setItem('user', user);
    LocalStorage.setItem('accessToken', accessToken);
    LocalStorage.setItem('refreshToken', refreshToken);
  },
  logout: () => {
    set({ user: null, accessToken: null, refreshToken: null });
    LocalStorage.removeItem('user');
    LocalStorage.removeItem('accessToken');
    LocalStorage.removeItem('refreshToken');
  },
}));

export default useAuthStore;
