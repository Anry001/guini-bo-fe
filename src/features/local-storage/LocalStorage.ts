import type { LocalStorageData } from 'local-storage-data';

class LocalStorage {
  static getItem<K extends keyof LocalStorageData>(
    key: K,
  ): LocalStorageData[K] | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  static setItem<K extends keyof LocalStorageData>(
    key: K,
    value: LocalStorageData[K],
  ): void {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  }

  static removeItem<K extends keyof LocalStorageData>(key: K): void {
    localStorage.removeItem(key);
  }
}

export default LocalStorage;
