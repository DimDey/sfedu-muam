// button slider

let activeNum = 0;
const elements = document.querySelectorAll('.review__item');
const leftArrow = document.querySelector('.review-slider__arrow-left')
const rightArrow = document.querySelector('.review-slider__arrow-right')

function updateTransform() {
  let displayArea = elements[0].clientWidth;
  let pixels = -displayArea * activeNum;
  elements.forEach( x => x.style.transform = 'translateX('+ pixels + 'px)');
}
leftArrow.addEventListener('click', (e) => {
  activeNum = Math.max(activeNum - 1, 0);
  updateTransform()
});

rightArrow.addEventListener('click', (e) => {
  activeNum = Math.min(activeNum + 1, elements.length - 1);
  updateTransform()
});

window.addEventListener('resize', (e) => {
  updateTransform()
});

// draggable slider

let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.slider-wrapper');

const end = () => {
  isDown = false;
}
slider.addEventListener('mouseleave', end);
slider.addEventListener('mouseup', end);
slider.addEventListener('touchend', end);

const start = (e) => {
  isDown = true;
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}
slider.addEventListener('mousedown', start);
slider.addEventListener('touchstart', start);

const move = (e) => {
  if(!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}
slider.addEventListener('mousemove', move);
slider.addEventListener('touchmove', move);

