const rangeSlider      = document.querySelector('.range-slider');
const rangeSliderValue = document.querySelector('.value-slider');

rangeSliderValue.textContent = rangeSlider.value;

rangeSlider.addEventListener('input', (e) => {
  rangeSliderValue.textContent = rangeSlider.value;
});