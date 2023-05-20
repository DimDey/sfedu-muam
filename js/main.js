// button slider

let activeNum = 0;
const elements = document.querySelectorAll('.review__item');
const leftArrow = document.querySelector('.review-slider__arrow-left')
const rightArrow = document.querySelector('.review-slider__arrow-right')
const checkbox = document.getElementById('hamburger__toggle')

checkbox.addEventListener('change', (event) => {
  document.body.classList.toggle("overflow_hid")
})

function updateTransform() {
  let displayArea = elements[0].clientWidth;
  let pixels = -displayArea * activeNum;
  elements.forEach( x => x.style.transform = 'translateX('+ pixels + 'px)');
}
leftArrow.addEventListener('click', (e) => {
  changeActive(activeNum - 1)
});

rightArrow.addEventListener('click', (e) => {
  changeActive(activeNum + 1)
});

function changeActive(newActive) {
  if (newActive < 0)
    newActive = elements.length - 1;

  if(newActive > (elements.length - 1))
    newActive = 0

  activeNum = newActive
  updateTransform()
}

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

