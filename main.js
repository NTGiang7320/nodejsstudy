// Copy menu for mobile
function copyMenu() {
  // Copy inside .dpt-cat to .departments
  let dptCategory = document.querySelector('.dpt-cat');
  let dptPlace = document.querySelector('.departments');
  dptPlace.innerHTML = dptCategory.innerHTML;

  // Copy inside nav to nav
  let mainNav = document.querySelector('.header-nav nav');
  let navPlace = document.querySelector('.off-canvas nav');
  navPlace.innerHTML = mainNav.innerHTML

  // Copy .header-top .wrapper to .thetop-nav
  let topNav = document.querySelector('.header-top .wrapper');
  let topPlace = document.querySelector('.off-canvas .thetop-nav');
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

// Mobile show menu
const menuButton = document.querySelector('.trigger'),
  closeButton = document.querySelector('.t-close'),
  addClass = document.querySelector('.site')

menuButton.addEventListener('click', function () {
  addClass
    .classList
    .toggle('showmenu')
})
closeButton.addEventListener('click', function () {
  addClass
    .classList
    .remove('showmenu')
})

// Show sub menu in mobile
const submenu = document.querySelectorAll('.has-child .icon-small')
submenu.forEach((menu) => menu.addEventListener('click', toggle))
function toggle(e) {
  e.preventDefault();
  submenu.forEach(
    (item) => item != this
      ? item.closest('.has-child').classList.remove('expand')
      : null
  )
  if (this.closest('.has-child').classList != 'expand')
    this
      .closest('.has-child')
      .classList
      .toggle('expand')
}

// Slider
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination'
  }
});
// Show search
const searchButton = document.querySelector('.t-search')
const tClose = document.querySelector('.search-close')
const showClass = document.querySelector('.site')
searchButton.addEventListener('click', function () {
  showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function () {
  showClass.classList.remove('showsearch')
})

