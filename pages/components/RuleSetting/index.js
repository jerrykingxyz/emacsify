const template = `
<style type="text/css">
.ruleContainer {
  display: flex;
  justify-content: space-between;
  border: solid #979797;
  border-width: 0 0 1px 0;
  margin: 0 -20px;
  padding: 10px;
}

</style>
    <div class="ruleContainer">
        <input />
        <input />
        <img src="./img/delete_forever.svg">
    </div>`

export default class RuleSetting extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = template
  }
}
