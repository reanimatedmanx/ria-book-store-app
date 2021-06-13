export const setObjectToStorage = (key: string, obj: Object): void =>
  localStorage.setItem(key, JSON.stringify(obj));

export const getObjectFromStorage = (key: string): Object =>
  JSON.parse(localStorage.getItem(key));
