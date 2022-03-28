let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
function increment() {
  count++;
  countEl.innerText = count;
}
function save() {
  let count1 = count + " - ";
  saveEl.innerText += count1;
}
