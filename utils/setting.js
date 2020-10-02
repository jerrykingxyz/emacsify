const storage = chrome.storage.sync;

const defaultSetting = {
  keymap: {},
  modules: []
};

export function setSetting(setting = defaultSetting) {
  storage.set(setting);
  return Promise.resolve();
}

export function getSetting() {
  return new Promise(function(res) {
    storage.get(null, function(setting) {
      res(setting);
    });
  });
}
