export function getItem(key) {
  return window.localStorage.getItem(key);
}

export function setItem(key, value) {
  window.localStorage.setItem(key, value);
}
