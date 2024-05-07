const container = document.querySelector(`.container`);
const gridBtn = document.querySelector(`#grid-size`);
const body = document.querySelector(`body`);
const slider = document.querySelector(`#slider`);
const sliderText = document.querySelector(`.sliderText`);
const reset = document.querySelector(`#reset`);
const color = document.querySelector(`#color`);
const toggle = document.querySelector(`#toggle`);

let rgbColor = function () {
  return Math.floor(Math.random() * 255);
};

sliderText.textContent = slider.value;
function sliderSize(value) {
  sliderText.textContent = value;
}

slider.addEventListener(`mousemove`, (e) => {
  sliderSize(e.target.value);
});
slider.addEventListener(`change`, (e) => {
  createCanvas(e.target.value);
});
console.log(rgbColor());
createCanvas(slider.value);

function createCanvas(num) {
  let div = container.querySelectorAll(`div`);
  div.forEach((divs) => divs.remove());
  let RGB = false;

  for (let i = 0; i < num * num; i++) {
    const div = document.createElement(`div`);
    div.style.width = `${600 / num}px`;
    div.style.height = `${600 / num}px`;
    container.appendChild(div);
    div.addEventListener(`mouseover`, () => {
      RGB === true
        ? (div.style.backgroundColor = `rgb(${rgbColor()}, ${rgbColor()}, ${rgbColor()})`)
        : (div.style.backgroundColor = `black`);
    });
    reset.addEventListener(`click`, () => {
      div.style.backgroundColor = `white`;
    });
    toggle.addEventListener(`click`, () => {
      div.classList.toggle(`gridBorder`);
    });
  }
  color.addEventListener(`click`, () => {
    if (RGB === false) {
      RGB = true;
      color.style.color = `rgb(${rgbColor()}, ${rgbColor()}, ${rgbColor()})`;
    } else if (RGB === true) {
      RGB = false;
      color.style.color = ``;
    }
  });
}
