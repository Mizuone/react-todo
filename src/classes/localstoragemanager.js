class LocalStorageManager {

  static validStorageItem(name) {

    if (!JSON.parse(localStorage.getItem(name))) return false;

    return true;

  }

  static getLocalStorage(name) {
    if (!this.validStorageItem(name)) return [];

    return JSON.parse(localStorage.getItem(name));
  }

  static setLocalStorage(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
  }

}

export default LocalStorageManager;
