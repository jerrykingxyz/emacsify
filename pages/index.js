class TopBar extends HTMLElement {
  constructor() {
    super();
    var templateElem = document.getElementById('topBarTemplate');
    var content = templateElem.content.cloneNode(true);
    this.appendChild(content);
  }
}
class SettingCard extends HTMLElement {
  constructor() {
    super();
    var templateElem = document.getElementById('settingCardTemplate');
    var content = templateElem.content.cloneNode(true);
    content.querySelector('img').setAttribute('src', this.getAttribute('image'));
    content.querySelector('.cardTitle .title').innerText = this.getAttribute('title');
    content.querySelector('.cardContainer').innerHTML = this.innerHTML
    this.innerHTML = ''
    this.appendChild(content)
  }
}

class ruleSetting extends HTMLElement {
  constructor() {
    super();
    var templateElem = document.getElementById('ruleSettingTemplate');
    var content = templateElem.content.cloneNode(true);
    this.appendChild(content);
  }
}
window.customElements.define('top-bar', TopBar);
window.customElements.define('setting-card', SettingCard);
window.customElements.define('rule-setting', ruleSetting);
