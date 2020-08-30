const template = `<style>
.codeModule {
  min-height: 80px;
  max-width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  margin: 10px;
  border: #979797 solid 1px;
  text-align: center;
}

.codeModule .operation {
  display: flex;
  justify-content: space-around;
}
    </style>
    <div class="codeModule">
        <input>
        <div class="operation">
            <img src="img/visibility.svg">
            <img src="img/upgrade.svg">
            <img src="img/delete_forever.svg">
        </div>
    </div>`

export default class RuleSetting extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = template
  }
}
