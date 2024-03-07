const btn = document.querySelector('.btn');
const foco = document.querySelector('#foco');

let power = false;

function manageClass(addClass, rmClass) {
  foco.classList.remove(rmClass);
  foco.classList.add(addClass);
  btn.innerText = rmClass;
}

btn.addEventListener('click', () => {
  power = !power;

  if (power) {
    manageClass('on', 'off');
  } else {
    manageClass('off', 'on');
  }
});

