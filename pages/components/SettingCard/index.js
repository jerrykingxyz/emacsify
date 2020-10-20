import BaseHTMLElement,{html} from '../BaseHTMLElement/index.js'

let template = html`<style type="text/css">
      .card {
  padding: 10px;
}
.cardTitle{
  margin: 10px 0;
}
.cardTitle > * {
  vertical-align: middle;
}
.cardTitle > icon-svg{
  font-size: 24px;
}
.cardTitle > .title {
  color: rgba(232,234,237,1);
  margin-left: 10px;
}
.cardContainer {
  background: #292A2D;
  padding: 0 20px;
  border-radius: 5px;
}
  
    </style>
    <div class="card">
        <div class="cardTitle">
            <icon-svg href="${x => x.getAttribute("href")}"></icon-svg>
            <span class="title">${x => x.title}</span>
        </div>
        <div class="cardContainer" style="display: ${x => x.getAttribute("isFlex") ? "flex" : "block"}" >
            ${x => x.innerHTML}
        </div>
    </div>`

export default class SettingCard extends BaseHTMLElement {
  constructor() {
    super(template);
  }
}
