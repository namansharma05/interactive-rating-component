"use strict";
let rating = 0;
function changecol(x) {
  x.style.backgroundColor = "hsl(25, 97%, 53%)";
}
function colchange(x) {
  x.style.backgroundColor = "hsl(213, 19%, 18%)";
}
const changesubmit = () => {
  document.getElementsByClassName("btnSubmit")[0].style.backgroundColor =
    "hsl(0, 0%, 100%)";
  document.getElementsByClassName("btnSubmit")[0].style.color =
    "hsl(25, 97%, 53%)";
};
const submitchange = () => {
  document.getElementsByClassName("btnSubmit")[0].style.backgroundColor =
    "hsl(25, 97%, 53%)";
  document.getElementsByClassName("btnSubmit")[0].style.color =
    "hsl(0, 0%, 100%)";
};
function selected(x) {
  rating = x.innerHTML;
  // console.log(rating);
  let items = document.getElementsByClassName("grid-item");
  // console.log(items[0]);
  for (let i = 0; i < items.length; i++) {
    colchange(items[i]);
    items[i].setAttribute("onmouseover", "changecol(this)");
    items[i].setAttribute("onmouseleave", "colchange(this)");
  }
  x.style.backgroundColor = "hsl(217, 12%, 63%)";
  x.setAttribute("onmouseleave", "");
  x.setAttribute("onmouseover", "");
}
const submit = () => {
  document.getElementsByClassName("thankyouState")[0].style.zIndex = 1;
  document.getElementsByClassName("rat")[0].innerHTML = rating;
};
