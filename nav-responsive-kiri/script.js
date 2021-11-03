const mToggle = document.querySelector('.mtoggle input');
const nav = document.querySelector('nav ul');

mToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});