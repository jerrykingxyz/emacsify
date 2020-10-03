import { getSetting } from "../utils/setting.js";
import bindKeyMap from "./bindKeyMap";

(async function() {
  const { keymap, modules } = await getSetting();
  for (const { code } of modules) {
    eval(code);
  }
  // bind keymap
  bindKeyMap(keymap);
})();
