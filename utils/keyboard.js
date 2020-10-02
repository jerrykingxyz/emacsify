function defaultFormatter(obj) {
  const { char, ctrlKey, metaKey, shiftKey } = obj;
  const ctrlText = ctrlKey ? "C-" : "";
  const metaText = metaKey ? "M-" : "";
  const shiftText = shiftKey ? "S-" : "";
  return `${ctrlText}${metaText}${shiftText}${char}`;
}

export function formatKeyStr(str, formatter = defaultFormatter) {
  const res = {
    char: null,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false
  };
  const keys = str.split("-");
  for (const key of keys) {
    if (key.length !== 1) {
      // TODO check
      throw new Error(`format key failed, ${str} is a invalid key`);
    }
    switch (key) {
      case "C":
        res.ctrlKey = true;
        break;
      case "S":
        res.shiftKey = true;
        break;
      case "M":
        res.metaKey = true;
        break;
      default:
        res.char = key.toLowerCase();
    }
  }

  if (!res.char) {
    throw new Error(`format key failed, ${str} is a invalid key`);
  }

  return formatter(res);
}

const skipKey = ["Control", "Meta", "Alt", "Shift"];
export function calcKeyStrByEvent(event) {
  const char = event.key;
  if (skipKey.includes(char)) {
    return null;
  }

  return defaultFormatter({
    char: char.toLowerCase(),
    ctrlKey: event.ctrlKey,
    metaKey: event.metaKey,
    shiftKey: event.shiftKey
  });
}
