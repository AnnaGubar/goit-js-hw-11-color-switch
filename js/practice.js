const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const btnStartRef = document.querySelector('[data-action="start"]');
const btnStopRef = document.querySelector('[data-action="stop"]');
let intervalId = null;

btnStartRef.addEventListener('click', btnStartHandler);
btnStopRef.addEventListener('click', btnStopHandler);

function btnStartHandler() {
  btnStartRef.disabled = true;
  btnStopRef.disabled = false;
  intervalId = setInterval(changeColorHandler, 1000);
}

function btnStopHandler() {
 btnStartRef.disabled = false;
 btnStopRef.disabled = true;
 clearInterval(intervalId);
}

function changeColorHandler() {
  document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
