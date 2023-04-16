const refs = {
  sliderEl: document.querySelector('.slider'),
  nextBtnEl: document.querySelector('.slider-next'),
  prevBtnEl: document.querySelector('.slider-prev'),
  comicsEl: document.querySelector('.slider-item'),
  comicsParentEl: document.querySelector('.slick-track'),
}

console.log(refs.sliderEl.lastElementChild)
console.log(refs.comicsEl)

$(refs.sliderEl).slick({
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
});

refs.nextBtnEl.addEventListener('click', () => {
  $(refs.sliderEl).slick('slickNext');
  if (refs.comicsEl == refs.comicsParentEl.lastElementChild) {
    refs.nextBtnEl.setAttribute('disabled', true);
  }
});
refs.prevBtnEl.addEventListener('click', () => {
  $(refs.sliderEl).slick('slickPrev');
});