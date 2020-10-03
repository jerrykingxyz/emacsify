const tipbarEle = document.createElement("div");
tipbarEle.classList.add("emacsify-tipbar");
document.body.appendChild(tipbarEle);

function showTipbar() {
  tipbarEle.classList.add("emacsify-visible");
}

function hideTipbar() {
  tipbarEle.classList.remove("emacsify-visible");
}

export function confirm(message) {
  showTipbar();
  console.log(message);
  //  tipbarEle.
}
