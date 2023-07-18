export function evalScript(script) {
  let elem = document.createElement("script");
  elem.textContent = script;
  document.head.appendChild(elem);
}
