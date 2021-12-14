const button = document.querySelector("button");
const h2Elem = document.querySelector("h2");
const bgEl = document.querySelector("section");



 ;


button.addEventListener("click",function(){
  let  color = '#'
  color += Math.random().toString(16).slice(2,8);
  bgEl.style.backgroundColor = color;
  h2Elem.innerHTML = color;
  button.style.backgroundColor = color;
})