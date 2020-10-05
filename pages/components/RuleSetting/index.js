import BaseHTMLElement,{html} from '../BaseHTMLElement/index.js'

const template = html`
<style type="text/css">
.ruleContainer {
  display: flex;
  justify-content: space-between;
  border: solid rgb(76,77,78);
  border-width: 0 0 1px 0;
  margin: 0 -20px;
  padding: 10px;
}
.ruleContainer icon-svg {
  font-size: 24px;
  transition: .3s;
  color: #E8EAED;
}
.ruleContainer icon-svg:hover{
  color: #fc4042;
  cursor: pointer;
}

</style>
    <div class="ruleContainer">
        <input />
        <input />
        <icon-svg href="delete"></icon-svg>
    </div>`

export default class RuleSetting extends BaseHTMLElement {
  constructor() {
    super(template);
  }
}
