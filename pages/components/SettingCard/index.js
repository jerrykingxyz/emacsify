const template =
  `<style type="text/css">
      .card {
  padding: 10px;
}
.cardTitle{
  margin: 10px 0;
}
.cardTitle > .title {
  color: rgba(232,234,237,1);
  vertical-align: super;
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
            <img class="image"/>
            <span class="title"></span>
        </div>
        <div class="cardContainer">
        </div>
    </div>`

export default class SettingCard extends HTMLElement {
  constructor() {
    super();
    const cardContainerHtml = this.innerHTML
    this.innerHTML = template
    const cardContainer = this.querySelector('.cardContainer')
    cardContainer.innerHTML = cardContainerHtml
    this.querySelector('img').setAttribute('src', this.getAttribute('image'));
    this.querySelector('.cardTitle .title').innerText = this.getAttribute('title');
    if(this.getAttribute("isFlex")){
      cardContainer.setAttribute("style","display:flex")
    }
  }
}
