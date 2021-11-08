const board = document.querySelector('#board');
const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  '#de7878',
  '#962eff',
  '#28b4d4',
  '#28d4ac',
  '#9dff00',
];
const SQUARES_NUMBER = 1015;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseleave', () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRanderColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}

function getRanderColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
