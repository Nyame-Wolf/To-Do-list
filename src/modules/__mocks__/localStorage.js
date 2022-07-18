const store = {};

export function getItem(key) {
  // console.log(">>> getting!!", key);
  return store[key] || null;
}

export function setItem(key, value) {
  //   console.log(">>> setting!!", key, value);
  store[key] = value;
}
