const isDebug = false;
// const logLevel = ''

export function log(...args) {
  if (isDebug) {
    console.log(...args);
  }
}

export function error(...args) {
  if (isDebug) {
    console.error(...args);
  }
}

export function warning(...args) {
  if (isDebug) {
    console.warning(...args);
  }
}
