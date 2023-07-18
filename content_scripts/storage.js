const storage = chrome.storage.sync;

export async function setScript(script) {
  storage.set({ script });
}

export async function getScript() {
  const result = await storage.get(["script"]);
  return result.script || "console.log('storage')";
}
