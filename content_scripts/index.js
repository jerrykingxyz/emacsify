(async function () {
  const src = chrome.runtime.getURL("content_scripts/main.js");
  await import(src);
})();
