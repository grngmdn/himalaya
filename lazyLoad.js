// Intersection observer animation
const faders = document.querySelectorAll('.fade-In');
const slide = document.querySelectorAll('.slide-In');

const options = {
  // default value
  threshold: 0,
  // default value is all 0px
  rootMargin: '0px 0px -250px 0px',
  // default value
  // root: null,
};

//main function
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    // debugger
    console.log(entry);

    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      // unobserving after its done
      appearOnScroll.unobserve(entry.target);
    }
  });
}, options);

// running fade in
faders.forEach((f) => {
  appearOnScroll.observe(f);
});

// running slide in
slide.forEach((s) => {
  appearOnScroll.observe(s);
});
