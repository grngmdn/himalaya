const togglefunction = () => {
  const burgerNav = document.querySelector('.navigation-ul');

  burgerNav.addEventListener('click', () => {
    burgerNav.classList.toggle('navigation-ul-two');
  });
};

togglefunction();
