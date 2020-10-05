import BaseHTMLElement,{html} from '../BaseHTMLElement/index.js'

const template = html`<style>
.codeModule {
  min-height: 80px;
  max-width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  margin: 10px;
  border: rgb(76,77,78) solid 1px;
  text-align: center;
}

.codeModule .operation {
  display: flex;
  justify-content: space-around;
}
.codeModule icon-svg {
  font-size: 24px;
  transition: .3s;
  color: #E8EAED;
}
.codeModule icon-svg:hover {
  cursor: pointer;
}
.codeModule .visibility:hover {
  color: #356DF2;
}
.codeModule .delete:hover {
  color: #fc4042;
};

    </style>
    <div class="codeModule">
        <input>
        <div class="operation">
            <icon-svg href="visibility" class="visibility"></icon-svg>
            <icon-svg href="upgrade"></icon-svg>
            <icon-svg href="delete" class="delete"></icon-svg>
        </div>
    </div>`

const defaultTemplate = () => `
    <style>
.defaultCodeModule {
  border-style: dashed;
  color: #0C5FF5;
  padding: 10px 24px;
}
.moduleContainer {
  cursor: pointer;
  padding-right: 4px;
}
.moduleContainer > * {
    vertical-align: middle;
}
    </style>
    <div class="defaultCodeModule codeModule">
        <div class="moduleContainer">
            <icon-svg href="add"></icon-svg>
            <span>create</span>
        </div>
    </div>`

export default class CodeModule extends BaseHTMLElement {
  constructor() {
    super(template)
  }
}

export class DefaultCodeModule extends BaseHTMLElement{
  constructor(){
    super(defaultTemplate)
  }
}
