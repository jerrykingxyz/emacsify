import { calcKeyStrByEvent } from "../utils/keyboard.js";

/*const globalMap = {
  "C-x": {
    "C-s": function() {
      console.log("C-x C-s save");
    }
  }
};*/
export default function bindKeyMap(globalMap) {
  let scopeMap = null;
  const keydownHandler = function(event) {
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
  return function() {
    window.removeEventListener("keydown", keydownHandler);
  };
}
