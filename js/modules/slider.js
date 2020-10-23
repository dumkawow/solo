'use strict';
function slider({container, wrapper, inner, slides, currentCount, totalCount, nextArrow, prevArrow}) {

  let offset = 0,
      slideIndex = 1;

  const slider = document.querySelector(container),
        sliderWrapper = slider.querySelector(wrapper),
        sliderInner = slider.querySelector(inner),
        slide = document.querySelectorAll(slides),
        current = document.querySelector(currentCount),
        total = document.querySelector(totalCount),
        next = document.querySelector(nextArrow),
        prev = document.querySelector(prevArrow),
        width = window.getComputedStyle(sliderWrapper).width;

  slide.forEach(item => {
    item.style.width = width;
  });

  slider.style.position = 'relative';
  const dots = [];

  const indicators = document.createElement('ul');
  indicators.classList.add('carousel-indicators');
  slider.append(indicators);
  for (let i = 0; i < slide.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.classList.add('dot');
    indicators.append(dot);

    dots.push(dot);

    if (i == 0) {
      dot.style.opacity = 1;
    }
  }
 
  if (slide.length < 10) {
    total.textContent = `0${slide.length}`;
    current.textContent = `0${slideIndex}`;
  }

  const t = 100 * slide.length + '%';
  sliderInner.style.cssText = `
    width: ${t};
    transition: .3s all;
    display: flex;
  `;
  sliderWrapper.style.overflow = 'hidden';

  function toggleDots() {
    dots.forEach(item => {
      item.style.opacity = '';
    });
    dots[slideIndex - 1].style.opacity = 1;
  }

  function toggleCounter() {
    current.textContent = `0${slideIndex}`;
  }

  function toggleNextSlide() {
    if (slideIndex === slide.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (offset === parseInt(width) * (slide.length - 1)) {
      offset = 0;
    } else {
      offset += parseInt(width);
    }
    toggleCounter();
    toggleDots();
    sliderInner.style.transform = `translateX(-${offset}px)`;
  }

  function togglePrevSlide() {
    if (slideIndex === 1) {
      slideIndex = slide.length;
    } else {
      slideIndex--;
    }

    if (offset === 0) {
      offset = parseInt(width) * (slide.length - 1);
    } else {
      offset -= parseInt(width);
    }
    toggleCounter();
    toggleDots();
    sliderInner.style.transform = `translateX(-${offset}px)`;
  }

  next.addEventListener('click', toggleNextSlide);
  prev.addEventListener('click', togglePrevSlide);

  dots.forEach(item => {
    item.addEventListener('click', (e) => {
      let slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;

      offset = parseInt(width) * (slideTo - 1);
      sliderInner.style.transform = `translateX(-${offset}px)`;
      toggleDots();
      
      toggleCounter();

    });
  });


}

export default slider;