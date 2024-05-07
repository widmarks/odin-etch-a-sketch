const container = document.querySelector(`.container`);
const gridBtn = document.querySelector(`#grid-size`);
const body = document.querySelector(`body`);
const slider = document.querySelector(`#slider`);
const sliderText = document.querySelector(`.sliderText`);

sliderText.textContent = slider.value;
function sliderSize(value) {
  sliderText.textContent = value;
}

slider.addEventListener(`mousemove`, (e) => {
  sliderSize(e.target.value);
});
// slider.addEventListener(`change`, (e) => {
//   createCanvas(e.target.value);
// });

createCanvas(slider.value);

function createCanvas(num) {
  const button = document.createElement(`button`);
  button.textContent = `Reset`;
  body.appendChild(button);
  for (let i = 0; i < num * num; i++) {
    const div = document.createElement(`div`);
    div.style.width = `${600 / num}px`;
    div.style.height = `${600 / num}px`;
    container.appendChild(div);
    div.addEventListener(`mouseover`, () => {
      div.style.backgroundColor = `black`;
    });
    button.addEventListener(`click`, () => {
      div.style.backgroundColor = `white`;
    });
  }
}
