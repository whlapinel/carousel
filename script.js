'use strict';

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const carouselNav = document.querySelector('.carousel-nav');

const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
const carouselNavItems = Array.from(document.querySelectorAll('.nav-item'));
const CAROUSEL_SIZE = carouselItems.length;

leftBtn.addEventListener('click', clickNav);
rightBtn.addEventListener('click', clickNav);
carouselNav.addEventListener('click', clickNav);

function clickNav(e) {
  const currentCarouselItem = document.querySelector('.carousel-item.active');
  const currentIndex = carouselItems.indexOf(currentCarouselItem);
  let nextIndex;
  if (e.target.classList.contains('nav-item')) {
    const chosenNav = e.target;
    nextIndex = carouselNavItems.indexOf(chosenNav);
  }
  if (e.currentTarget.classList.contains('left')) {
    if (currentIndex === 0) {
      nextIndex = CAROUSEL_SIZE - 1;
    } else {
      nextIndex = currentIndex - 1;
    }
  } else if (e.currentTarget.classList.contains('right')) {
    if (currentIndex === CAROUSEL_SIZE - 1) {
      nextIndex = 0;
    } else {
      nextIndex = currentIndex + 1;
    }
  }
  if (nextIndex !== undefined && nextIndex !== currentIndex) {
    carouselItems[nextIndex].classList.add('active');
    carouselNavItems[nextIndex].classList.add('active');
    currentCarouselItem.classList.remove('active');
    carouselNavItems[currentIndex].classList.remove('active');
  }
}