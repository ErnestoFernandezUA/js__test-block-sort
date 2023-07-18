"use strict";

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

let selectedDiv = null;

for (let i = 0; i < 100; i++) {
    let div = document.createElement('div');
    div.className = 'block';
    div.textContent = 'div' + (i + 1);
    div.style.order = i;
    div.style.backgroundColor = getRandomColor();
    div.dataset.defaultOrder = i;
    document.body.appendChild(div);
}

document.body.addEventListener('click', function (event) {
  if (event.target.className === 'block') {
    let div = event.target;

    if (parseInt(div.style.order) === 0) {
      div.style.order = div.dataset.defaultOrder;
    } else {
      if (selectedDiv) {
        selectedDiv.style.order = selectedDiv.dataset.defaultOrder;
      }

      div.style.order = -1;
      selectedDiv = div; 
    }
  }
});
