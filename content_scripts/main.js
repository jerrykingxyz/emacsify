import { getScript } from "./storage.js";
import { evalScript } from "./utils/evalScript.js";

(async function () {
  const code = await getScript();
  console.log("123", code);
  evalScript(code);
})();
