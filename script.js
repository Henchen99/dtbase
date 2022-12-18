// const hamburgers = document.getElementsByClassName('hamburger')[0];
// const nav_link_wrapper = document.getElementsByName('nav-link-wrapper')[0];

// hamburgers.addEventListener('click', () => {
//     nav_link_wrapper.classList.toggle('active');
// })


// const toggleButton = document.getElementsByClassName('hamburger')[0]
// const navbarLinks = document.getElementsByClassName('nav-link-wrapper')[0]

// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active')
// })


const toggleButton = document.getElementsByClassName('hamburger')[0];
const navbarLinks = document.querySelectorAll('.nav-link-wrapper');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
    navbarLinks.forEach((it) => {
        it.classList.toggle('active');
    });

});