let keyMappings = {
  control: "C",
  meta: "M",
  shift: "S",
};
export function setKeyMappings(mappings) {
  keyMappings = mappings;
}

const skipKey = ["Control", "Meta", "Alt", "Shift"];
function calcKeyStrByEvent(event) {
  const charKey = event.key.toLowerCase();
  if (skipKey.includes(charKey)) {
    return null;
  }

  const fnKeys = [];
  if (event.ctrlKey) {
    fnKeys.push(keyMappings.control);
  }
  if (event.metaKey) {
    fnKeys.push(keyMappings.meta);
  }
  if (event.shiftKey) {
    fnKeys.push(keyMappings.shift);
  }

  fnKeys.sort();
  return [...fnKeys, charKey].join("-");
}

function formatKey(str) {
  const keys = str.split("-");
  const charKey = keys.pop();
  const fnKeys = keys;

  if (!charKey) {
    throw new Error(`format key failed, str is ${str}`);
  }

  fnKeys.sort();
  return [...fnKeys, charKey].join("-");
}

function addKeyToBindings(bindings, keyStr, fn) {
  const keys = keyStr.split(" ").map(formatKey);
  const lastKey = keys.pop();

  for (const item of keys) {
    if (!bindings[item]) {
      bindings[item] = {};
    }
    bindings = bindings[item];

    if (typeof bindings !== "object") {
      throw new Error(`binding ${keyStr} with conflict`);
    }
  }

  if (bindings[lastKey] !== undefined) {
    throw new Error(`binding ${keyStr} with conflict`);
  }
  bindings[lastKey] = fn;
}

const keyBindings = {
  //  "C-x": {
  //    "o": function() {
  //      console.log("C-x o open");
  //    }
  //  }
};
export const bindKey = addKeyToBindings.bind(null, keyBindings);
const inputKeyBindings = {};
export const bindInputKey = addKeyToBindings.bind(null, inputKeyBindings);

let currentBindings = keyBindings;
let isInInput = false;
const currentPath = [];
window.addEventListener("keydown", function (event) {
  let keyStr = calcKeyStrByEvent(event);
  // TODO check
  const targetInput = event.target instanceof input;
  if ((targetInput && !isInInput) || (!targetInput && isInInput)) {
    currentBindings = targetInput ? inputKeyBindings : keyBindings;
    currentPath.length = 0;
  }

  if (typeof currentBindings[keyStr] === "function") {
    currentPath.length = 0;
    currentBindings[keyStr]();
  } else if (typeof currentBindings[keyStr] === "object") {
    currentBindings = currentBindings[keyStr];
    currentPath.push(keyStr);
  } else {
    // reset
    currentBindings = targetInput ? inputKeyBindings : keyBindings;
    currentPath.length = 0;
  }
});

// bind keydown event
/*
  let scopeMap = null;
  const keydownHandler = function (event) {
    const keyStr = calcKeyStrByEvent(event);
    if (!keyStr) {
      return;
    }
    if (!scopeMap) {
      scopeMap = globalMap;
    }

    const fn = scopeMap[keyStr];
    if (typeof fn === "function") {
      // TODO fn(obj)
      fn();
      scopeMap = null;
      return;
    }

    scopeMap = fn || null;
  };

  window.addEventListener("keydown", keydownHandler);
  return function () {
    window.removeEventListener("keydown", keydownHandler);
  };
*/
