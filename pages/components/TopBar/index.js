const template = `
    <style type="text/css">
       .topBar {
  height: 40px;
  width: 100%;
  background: #292A2D;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  padding: 8px 20px;
}
.topBar > .title{
  color:rgba(232,234,237,1);
  float: left;
  line-height: 48px;
}
.topBar > input {
  height: 100%;
  width: 500px;
  background: url("./img/search.svg") 10px center no-repeat;
  padding-left: 40px;
}

    </style>
    <div class="topBar">
        <div class="title">emacsify setting</div>
        <input placeholder="search"/>
    </div>`

export default class TopBar extends HTMLElement {

  constructor() {
    super();
    this.innerHTML = template
  }
}
