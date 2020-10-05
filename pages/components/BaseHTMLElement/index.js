export function html(strs,...funcs) {
  return function (ele) {
    let template = strs[0]
    console.log(ele.getAttribute("href"))
    funcs.forEach((func,index) => {
      let itemValue = typeof func === 'function' ? func(ele) : func
      let nextStr = strs[index+1]
      template += itemValue + nextStr
    })
    return template
  }
}

export default class BaseHTMLElement extends HTMLElement{
  constructor(template){
    super()
    this.innerHTML = template(this)
  }
}
