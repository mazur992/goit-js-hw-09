const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnStartEl.addEventListener('click', event => {
  const timerId = setInterval(changeFone, 1000);
  btnStartEl.disabled = true;

  btnStopEl.addEventListener('click', event => {
    clearInterval(timerId);
    btnStartEl.disabled = false;
  });
});

function changeFone() {
  bodyEl.style = `background-color:${getRandomHexColor()};`;
}
