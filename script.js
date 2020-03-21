// burger navigation
const toggleMyFunction = () => {
  const burger = document.querySelector('.burger-container');
  const navigationBar = document.querySelector('.navigation-ul');
  const listLinks = document.querySelectorAll('.list a');

  burger.addEventListener('click', () => {
    navigationBar.classList.toggle('navigation2');
    burger.classList.toggle('burgerToggle');
  });
};

toggleMyFunction();

// sticky nav bar
stickybits('header', { useStickyClasses: true });

// image gallery
function buttonClick(e) {
  document.getElementById('mainImage').src = e;
}
