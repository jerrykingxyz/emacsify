import BaseHTMLElement,{html} from '../BaseHTMLElement/index.js'

const template = html`<svg display="block" height="1em" width="1em"><use xlink:href="#${x => x.getAttribute("href")}"/></svg>`

export default class IconSvg extends BaseHTMLElement{
  constructor(){
    super(template)
    this.setAttribute('style','display:inline-block')
  }
}

