//hamburger menu
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('nav');

//changes hamburger menu states and closes menu after clicking menu BUTTON
menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});

//changes hamburger menu states and closes menu after clicking menu ITEM
mobile_menu.addEventListener('click', function () {
  mobile_menu.classList.toggle('is-active');
  menu_btn.classList.toggle('is-active');
});

//feather icons
feather.replace();

//URL to twitter
document.getElementById('twitter').addEventListener('click', function () {
  window.open('https://twitter.com/i/flow/login?redirect_after_login=%2FAzubiAfrica', '_blank');
});

//URL to facebook
document.getElementById('facebook').addEventListener('click', function () {
  window.open('https://www.facebook.com/AzubiAfrica/', '_blank');
});

//URL to instagram
document.getElementById('instagram').addEventListener('click', function () {
  window.open('https://www.instagram.com/azubi_africa/?hl=en', '_blank');
});