window.addEventListener("load", function (event) {
  const btn = document.querySelector('.js-menu-btn');
  const menu = document.querySelector('.js-header-menu');
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    btn.classList.toggle('active');
    menu.classList.toggle('active');
  });
});
